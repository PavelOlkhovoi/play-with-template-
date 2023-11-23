import { useCallback } from "react";
import { Handle, Position } from "reactflow";

const handleStyle = { left: 10 };

function TextUpdaterNode({ data }) {
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);

  return (
    <>
      {/* <Handle type="target" position={Position.Top} /> */}
      <div>
        <tr style={{ width: "100%" }}>
          <td>
            <strong>name</strong>
          </td>
          <td>Text</td>
          <td></td>
        </tr>
      </div>
      {/* <Handle type="source" position={Position.Bottom} id="a" /> */}
      {/* <Handle
        type="source"
        position={Position.Bottom}
        id="b"
        style={handleStyle}
      /> */}
    </>
  );
}

export default TextUpdaterNode;
