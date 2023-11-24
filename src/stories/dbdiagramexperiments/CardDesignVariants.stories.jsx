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
import "./overview.css";
import { ConsoleSqlOutlined, CodeOutlined } from "@ant-design/icons";
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
    id: "vzkat_richtung 2",
    type: "cidsClass",
    position: { x: 100, y: 200 },
    data: vzkat.vzkat_richtung,
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

const FirstCidsClassNode = ({ id, data }) => {
  console.log("xxx FirstCidsClassNode id", id);
  const iconStyle = { fontSize: "8px" };
  return (
    <div style={reactFLowWrapperCardCss}>
      <div style={headerCardCss}>
        <div style={headerCardTitleCss}>
          <span style={{ alineText: "left" }}>{data.name}</span>
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
    </div>
  );
};
const SecondCidsClassNode = ({ id, data }) => {
  const iconStyle = { fontSize: "8px" };
  return (
    <div style={reactFLowWrapperCardCss}>
      <div style={headerCardCss}>
        <div style={headerCardTitleCss}>
          <span style={{ alineText: "left" }}>{data.name}</span>
          <ConsoleSqlOutlined style={iconStyle} />
        </div>
      </div>
      <div>
        {Object.keys(data.attributes).map((key, index) => {
          const item = data.attributes[key];
          return (
            <div style={rowCardWithBorder} key={index}>
              {item.name}
            </div>
          );
        })}
      </div>
    </div>
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

export const Borderless = () => {
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
          cidsClass: SecondCidsClassNode,
        }}
      />
    </div>
  );
};
const PointCidsClassNode = ({ id, data }) => {
  const iconStyle = { fontSize: "8px" };
  return (
    <div style={reactFLowWrapperCardCss}>
      <div style={headerCardCss}>
        <div style={headerCardTitleCss}>
          <span style={{ alineText: "left" }}>{data.name}</span>
          <ConsoleSqlOutlined style={iconStyle} />
        </div>
      </div>
      <div>
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
                    id={id}
                    style={{ top: 5, right: -12 }}
                  />
                </div>
              ) : (
                <div>
                  {item.name} index {index}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const WithPort = () => {
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
          cidsClass: PointCidsClassNode,
        }}
      />
    </div>
  );
};

const PointCidsClassNodeGray = ({ id, data }) => {
  const iconStyle = { fontSize: "8px" };
  return (
    <div style={reactFLowWrapperCardCss}>
      <div style={{ ...headerCardCss, backgroundColor: "#f3f3f3" }}>
        <div className="cidsClass-node__header-title">
          <span>{data.name}</span>
          <ConsoleSqlOutlined style={iconStyle} />
        </div>
      </div>
      <div style={cardBodyGray}>
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
                    id={id}
                    style={{ top: 5, right: -12 }}
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

export const WithPortGrayBg = () => {
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
          cidsClass: PointCidsClassNodeGray,
        }}
      />
    </div>
  );
};

const PointIconLeftCidsClassNodeGray = ({ id, data }) => {
  const iconStyle = { fontSize: "8px" };
  return (
    <div style={reactFLowWrapperCardCss}>
      <div style={{ ...headerCardCss, backgroundColor: "#f3f3f3" }}>
        <div style={{ ...headerCardTitleCss, justifyContent: "start" }}>
          <CodeOutlined
            style={{
              ...iconStyle,
              marginRight: "5px",
              fontSize: "9px",
              // background: "rgb(231, 217, 126)",
            }}
          />
          <span style={{ marginTop: "-1px" }}>{data.name}</span>
        </div>
      </div>
      <div style={cardBodyGray}>
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
                    id={id}
                    style={{ top: 5, right: -12 }}
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

export const WithPortGrayBgIconLeft = () => {
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
          cidsClass: PointIconLeftCidsClassNodeGray,
        }}
      />
    </div>
  );
};
const PointIconLeftBorderlessCidsClassNodeGray = ({ id, data }) => {
  const iconStyle = { fontSize: "8px" };
  return (
    <div style={{ ...reactFLowWrapperCardCss, border: "0px solid black" }}>
      <div style={{ ...headerCardCss, backgroundColor: "#f3f3f3" }}>
        <div style={{ ...headerCardTitleCss, justifyContent: "start" }}>
          <CodeOutlined
            style={{
              ...iconStyle,
              marginRight: "5px",
              fontSize: "9px",
              // background: "rgb(231, 217, 126)",
            }}
          />
          <span style={{ marginTop: "-1px" }}>{data.name}</span>
        </div>
      </div>
      <div style={cardBodyGray}>
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
                    id={id}
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

export const WithPortGrayBgIconLeftBorderLess = () => {
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
          cidsClass: PointIconLeftBorderlessCidsClassNodeGray,
        }}
      />
    </div>
  );
};

const WithoutPointIconLeftBorderlessCidsClassNodeGray = ({ id, data }) => {
  const iconStyle = { fontSize: "8px" };
  return (
    <div style={{ ...reactFLowWrapperCardCss, border: "0px" }}>
      <div style={{ ...headerCardCss, backgroundColor: "#f3f3f3" }}>
        <div style={{ ...headerCardTitleCss, justifyContent: "start" }}>
          <CodeOutlined
            style={{
              ...iconStyle,
              marginRight: "5px",
              fontSize: "9px",
              // background: "rgb(231, 217, 126)",
            }}
          />
          <span style={{ marginTop: "-1px" }}>{data.name}</span>
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
                    id={id}
                    style={{ top: 5, right: -12 }}
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

export const WithOutPortWhiteBgIconLeftBorderLess = () => {
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
          cidsClass: WithoutPointIconLeftBorderlessCidsClassNodeGray,
        }}
      />
    </div>
  );
};

const PointWhiteBorderlessCidsClassNode = ({ id, data }) => {
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
                    id={id}
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

export const PortWhiteBgIconLeftBorderLess = () => {
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
          cidsClass: PointWhiteBorderlessCidsClassNode,
        }}
      />
    </div>
  );
};
