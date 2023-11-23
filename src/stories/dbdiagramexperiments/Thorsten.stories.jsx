import React, { useCallback } from "react";
import ReactFlow, {
  addEdge,
  Background,
  useNodesState,
  useEdgesState,
  MarkerType,
} from "reactflow";

import "reactflow/dist/style.css";
import "./overview.css";
import { ConsoleSqlOutlined } from "@ant-design/icons";
import { vzkat } from "./data";

export default {
  title: "Stories/Experiments",
};

export const FirstSimpleAdHocStory = (args) => <div style={{}}>111</div>;

export const AdhocStoryAsObject = {
  args: {
    bgc: "yellow",
  },
  render: (args) => <div style={{ backgroundColor: args.bgc }}>222</div>,
};

const manualNodes = [
  {
    id: "vzkat_richtung",
    type: "cidsClass",
    position: { x: 100, y: 200 },
    data: vzkat.vzkat_richtung,
  },
  {
    id: "vzkat_richtung",
    type: "cidsClass",
    position: { x: 100, y: 200 },
    data: vzkat.vzkat_richtung,
  },
];

const FirstCidsClassNode = ({ id, data }) => {
  const iconStyle = { fontSize: "8px" };
  return (
    <>
      <div className="cidsClass-node__header">
        <div className="cidsClass-node__header-title">
          <span className="cidsClass-node__header-title-text">{data.name}</span>
          <ConsoleSqlOutlined style={iconStyle} />
        </div>
      </div>
      <table>
        {Object.keys(data.attributes).map((key, index) => {
          const item = data.attributes[key];
          return (
            <tr key={index}>
              <td>{item.name}</td>
            </tr>
          );
        })}
      </table>
    </>
  );
};

export const SimpleClass = () => {
  return (
    <div
      style={{
        width: "1300px",
        height: "650px",
        backgroundColor: "white",
        padding: "1rem",
      }}
    >
      <ReactFlow
        nodes={manualNodes}
        fitView
        nodeTypes={{
          cidsClass: FirstCidsClassNode,
        }}
      />
    </div>
  );
};

export const SimpleClassWithBackground = () => {
  return (
    <div
      style={{
        width: "1300px",
        height: "650px",
        backgroundColor: "white",
        padding: "1rem",
      }}
    >
      <ReactFlow
        nodes={manualNodes}
        fitView
        nodeTypes={{
          cidsClass: FirstCidsClassNode,
        }}
      >
        <Background color="#aaa" gap={16} />
      </ReactFlow>
    </div>
  );
};
