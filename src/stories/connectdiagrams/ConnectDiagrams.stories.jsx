import React, { useCallback } from "react";
import ReactFlow, {
  addEdge,
  Background,
  useNodesState,
  useEdgesState,
  MarkerType,
  Handle,
  Position,
} from "reactflow";

import "reactflow/dist/style.css";
import { ConsoleSqlOutlined, CodeOutlined } from "@ant-design/icons";
import { vzkat } from "./data";
export default {
  title: "Stories/DBConnection",
};

const manualNodes = [
  {
    id: "1",
    type: "rightPort",
    position: { x: 100, y: 200 },
    data: vzkat.vzkat_richtung,
  },
  {
    id: "2",
    type: "leftPort",
    position: { x: 400, y: 200 },
    data: vzkat.vzkat_richtung,
  },
];
const simpleEdges = [
  {
    id: "e2-3",
    source: "1",
    target: "2",
    sourceHandle: "handle-0",
    targetHandle: "handle-1",
  },
];

const manualSchildlNodes = [
  {
    id: "1",
    type: "rightPort",
    position: { x: 0, y: 200 },
    data: vzkat.vzkat_schild,
  },
  {
    id: "2",
    type: "leftPort",
    position: { x: 350, y: 200 },
    data: vzkat.vzkat_richtung,
  },
];
const simpleSchildEdges = [
  {
    id: "e2-3",
    source: "1",
    target: "2",
    sourceHandle: "handle-0",
    targetHandle: "handle-1",
  },
];

const manualSRZNodes = [
  {
    id: "1",
    type: "rightPort",
    position: { x: 0, y: 200 },
    data: vzkat.vzkat_schild,
  },
  {
    id: "2",
    type: "leftPort",
    position: { x: 350, y: 200 },
    data: vzkat.vzkat_richtung,
  },
  {
    id: "3",
    type: "leftPort",
    position: { x: 350, y: 400 },
    data: vzkat.vzkat_zeichen,
  },
];
const simpleSRZEdges = [
  {
    id: "e2-3",
    source: "1",
    target: "2",
    sourceHandle: "handle-0A",
    targetHandle: "handle-2",
  },
  {
    id: "e1-3",
    source: "1",
    target: "3",
    sourceHandle: "handle-0B",
    targetHandle: "handle-3",
  },
];

const reactFLowWrapperCardCss = {
  fontFamily: '"Helvetica", sans-serif',
  fontSize: "9px",
  width: "180px",
  background: "white",
  color: "#222",
  boxShadow: "0 4px 6px -1px rgb(0 0 0 / 15%), 0 2px 4px -1px rgb(0 0 0 / 8%)",
  border: "1px solid #000000",
  borderRadius: "8px",
};

const headerCardCss = {
  backgroundColor: "#e5e7eb",
  borderBottom: "1px solid #000000",
  padding: "8px 8px",
  borderRadius: "8px 8px 0px 0px",
};

const headerCardTitleCss = {
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};

const rowClass = {
  padding: "4px 8px",
};

const rowFirstItemClass = { ...rowClass, marginTop: "4px" };
const rowLastItemClass = { ...rowClass, marginBottom: "4px" };

const rowWrapperCss = {
  width: "100%",
  borderCollapse: "collapse",
  border: "1px solid #000000",
  fontSize: "8px",
  borderRadius: "8px",
  overflow: "hidden",
};

const rowCardWithBorder = { padding: "4px 8px" };
const cardBodyGray = {
  backgroundColor: "#e0e0e0",
  margin: "0",
  padding: "1px 0px",
  borderRadius: "0px 0px 8px 8px",
};

const PortRighttWhiteBorderless = ({ id, data }) => {
  const iconStyle = { fontSize: "8px" };
  return (
    <div style={{ ...reactFLowWrapperCardCss, border: "0" }}>
      <div style={headerCardCss}>
        <div style={headerCardTitleCss}>
          <span style={{ alineText: "left" }}>{data.name}</span>
          <ConsoleSqlOutlined style={iconStyle} />
        </div>
      </div>
      <div style={{ ...cardBodyGray, background: "white" }}>
        {Object.keys(data.attributes).map((key, index) => {
          const item = data.attributes[key];
          return (
            <div
              style={
                index === 0
                  ? rowFirstItemClass
                  : index === Object.keys(data.attributes).length - 1
                  ? rowLastItemClass
                  : rowClass
              }
              key={index}
            >
              {item.name === "id" ? (
                <div style={{ position: "relative" }}>
                  {item.name}
                  <Handle
                    type="source"
                    position={Position.Right}
                    id={"handle-0"}
                    style={{
                      top: 5,
                      right: -12,
                      background: "#494949",
                      border: "1px solid #e5e7eb",
                    }}
                  />
                </div>
              ) : (
                <div>{item.name}</div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
const PortLeftWhiteBorderless = ({ id, data }) => {
  const iconStyle = { fontSize: "8px" };
  return (
    <div style={{ ...reactFLowWrapperCardCss, border: "0" }}>
      <div style={headerCardCss}>
        <div style={headerCardTitleCss}>
          <span style={{ alineText: "left" }}>{data.name}</span>
          <ConsoleSqlOutlined style={iconStyle} />
        </div>
      </div>
      <div style={{ ...cardBodyGray, background: "white" }}>
        {Object.keys(data.attributes).map((key, index) => {
          const item = data.attributes[key];
          return (
            <div
              style={
                index === 0
                  ? rowFirstItemClass
                  : index === Object.keys(data.attributes).length - 1
                  ? rowLastItemClass
                  : rowClass
              }
              key={index}
            >
              {item.name === "id" ? (
                <div style={{ position: "relative" }}>
                  {item.name}
                  <Handle
                    type="target"
                    position={Position.Left}
                    id={"handle-1"}
                    style={{
                      top: 5,
                      left: -12,
                      background: "#494949",
                      border: "1px solid #e5e7eb",
                    }}
                  />
                </div>
              ) : (
                <div>{item.name}</div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const FirstConnection = () => {
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
        edges={simpleEdges}
        fitView
        nodeTypes={{
          rightPort: PortRighttWhiteBorderless,
          leftPort: PortLeftWhiteBorderless,
        }}
      />
    </div>
  );
};
export const SchildConnection = () => {
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
        nodes={manualSchildlNodes}
        edges={simpleSchildEdges}
        fitView
        nodeTypes={{
          rightPort: PortRighttWhiteBorderless,
          leftPort: PortLeftWhiteBorderless,
        }}
      />
    </div>
  );
};

const SchilSourcedRichtungWithFkConnection = ({ id, data }) => {
  const iconStyle = { fontSize: "8px" };
  return (
    <div style={{ ...reactFLowWrapperCardCss, border: "0" }}>
      <div style={headerCardCss}>
        <div style={headerCardTitleCss}>
          <span style={{ alineText: "left" }}>{data.name}</span>
          <ConsoleSqlOutlined style={iconStyle} />
        </div>
      </div>
      <div style={{ ...cardBodyGray, background: "white" }}>
        {Object.keys(data.attributes).map((key, index) => {
          const item = data.attributes[key];
          return (
            <div
              style={
                index === 0
                  ? rowFirstItemClass
                  : index === Object.keys(data.attributes).length - 1
                  ? rowLastItemClass
                  : rowClass
              }
              key={index}
            >
              {item.name === "fk_richtung" ? (
                <div style={{ position: "relative" }}>
                  {item.name}
                  <Handle
                    type="source"
                    position={Position.Right}
                    id={"handle-0"}
                    style={{
                      top: 5,
                      right: -12,
                      background: "#494949",
                      border: "1px solid #e5e7eb",
                    }}
                  />
                </div>
              ) : (
                <div>{item.name}</div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const SchildFkConnection = () => {
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
        nodes={manualSchildlNodes}
        edges={simpleSchildEdges}
        fitView
        nodeTypes={{
          rightPort: SchilSourcedRichtungWithFkConnection,
          leftPort: PortLeftWhiteBorderless,
        }}
      />
    </div>
  );
};

const SchilSourcedWithTwoNodes = ({ id, data }) => {
  const iconStyle = { fontSize: "8px" };
  return (
    <div style={{ ...reactFLowWrapperCardCss, border: "0" }}>
      <div style={headerCardCss}>
        <div style={headerCardTitleCss}>
          <span style={{ alineText: "left" }}>{data.name}</span>
          <ConsoleSqlOutlined style={iconStyle} />
        </div>
      </div>
      <div style={{ ...cardBodyGray, background: "white" }}>
        {Object.keys(data.attributes).map((key, index) => {
          const item = data.attributes[key];
          return (
            <div
              style={
                index === 0
                  ? rowFirstItemClass
                  : index === Object.keys(data.attributes).length - 1
                  ? rowLastItemClass
                  : rowClass
              }
              key={index}
            >
              {item.name === "fk_richtung" ? (
                <div style={{ position: "relative" }}>
                  {item.name}
                  <Handle
                    type="source"
                    position={Position.Right}
                    id={"handle-0A"}
                    style={{
                      top: 5,
                      right: -12,
                      background: "#494949",
                      border: "1px solid #e5e7eb",
                    }}
                  />
                </div>
              ) : item.name === "fk_zeichen" ? (
                <div style={{ position: "relative" }}>
                  {item.name}
                  <Handle
                    type="source"
                    position={Position.Right}
                    id={"handle-0B"}
                    style={{
                      top: 5,
                      right: -12,
                      background: "#494949",
                      border: "1px solid #e5e7eb",
                    }}
                  />
                </div>
              ) : (
                <div>{item.name}</div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const PortLeftHandleWithId = ({ id, data }) => {
  const iconStyle = { fontSize: "8px" };
  return (
    <div style={{ ...reactFLowWrapperCardCss, border: "0" }}>
      <div style={headerCardCss}>
        <div style={headerCardTitleCss}>
          <span style={{ alineText: "left" }}>{data.name}</span>
          <ConsoleSqlOutlined style={iconStyle} />
        </div>
      </div>
      <div style={{ ...cardBodyGray, background: "white" }}>
        {Object.keys(data.attributes).map((key, index) => {
          const item = data.attributes[key];
          return (
            <div
              style={
                index === 0
                  ? rowFirstItemClass
                  : index === Object.keys(data.attributes).length - 1
                  ? rowLastItemClass
                  : rowClass
              }
              key={index}
            >
              {item.name === "id" ? (
                <div style={{ position: "relative" }}>
                  {item.name}
                  <Handle
                    type="target"
                    position={Position.Left}
                    id={`handle-${id}`}
                    style={{
                      top: 5,
                      left: -12,
                      background: "#494949",
                      border: "1px solid #e5e7eb",
                    }}
                  />
                </div>
              ) : (
                <div>{item.name}</div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const SRZConnection = () => {
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
        nodes={manualSRZNodes}
        edges={simpleSRZEdges}
        fitView
        nodeTypes={{
          rightPort: SchilSourcedWithTwoNodes,
          leftPort: PortLeftHandleWithId,
        }}
      />
    </div>
  );
};
