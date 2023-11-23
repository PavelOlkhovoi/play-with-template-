import React, { memo } from "react";
import { Handle, useReactFlow, useStoreApi, Position } from "reactflow";
import { ConsoleSqlOutlined } from "@ant-design/icons";
const attributs = { name: "ID", schluessel: "text", ID: "1111" };
function Select({ value, handleId, nodeId }) {
  console.log("xxx data Select value", value);
  console.log("xxx data Select handleId", handleId);
  console.log("xxx data Select nodeId", nodeId);

  const { setNodes } = useReactFlow();
  const store = useStoreApi();

  const onChange = (evt) => {
    const { nodeInternals } = store.getState();
    setNodes(
      Array.from(nodeInternals.values()).map((node) => {
        if (node.id === nodeId) {
          node.data = {
            ...node.data,
            selects: {
              ...node.data.selects,
              [handleId]: evt.target.value,
            },
          };
        }

        return node;
      })
    );
  };

  return (
    <div className="custom-node__select" style={{ marginBotton: "0px" }}>
      {Object.keys(attributs).map((item) => (
        <div key={item} className="custom-node__select-item">
          {item}
          {item === "ID" && (
            <div style={{ position: "relative" }}>
              <Handle
                type="source"
                position={Position.Right}
                id={handleId}
                style={{ top: -5, right: -12 }}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function CustomNode({ id, data }) {
  const iconStyle = { fontSize: "8px" };
  console.log("xxx data", data);
  return (
    <>
      <div className="custom-node__header">
        <div className="custom-node__header-title">
          <span className="custom-node__header-title-text">VZKAT_RICHTUNG</span>
          <ConsoleSqlOutlined style={iconStyle} />
        </div>
      </div>
      <div className="custom-node__body">
        {Object.keys(data.selects).map((handleId) => (
          <Select
            key={handleId}
            nodeId={id}
            value={data.selects[handleId]}
            handleId={handleId}
          />
        ))}
      </div>
      {/* <table>
        <tr>
          <td>
            <strong>name</strong>
          </td>
          <td>Text</td>
          <td></td>
        </tr>
        <tr>
          <td>
            <strong>ID</strong>
          </td>
          <td>Text</td>
          <td>Autoincrement</td>
        </tr>
        <tr>
          <td>
            <strong>schluessel</strong>
          </td>
          <td>Text</td>
          <td></td>
        </tr>
      </table> */}
    </>
  );
}

export default memo(CustomNode);
