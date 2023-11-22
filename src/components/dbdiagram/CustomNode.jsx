import React, { memo } from "react";
import { Handle, useReactFlow, useStoreApi, Position } from "reactflow";

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
    <div className="custom-node__select">
      {Object.keys(attributs).map((item) => (
        <div key={item} className="custom-node__select-item">
          {item}
        </div>
      ))}
      <Handle type="source" position={Position.Right} id={handleId} />
    </div>
  );
}

function CustomNode({ id, data }) {
  console.log("xxx data", data);
  return (
    <>
      <div className="custom-node__header">VZKAT_RICHTUNG</div>
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
    </>
  );
}

export default memo(CustomNode);
