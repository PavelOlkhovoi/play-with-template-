import React, { useCallback, useState } from "react";
import ReactFlow, {
  addEdge,
  Background,
  ConnectionLineType,
  useNodesState,
  useEdgesState,
  MarkerType,
  Handle,
  Position,
  applyEdgeChanges,
  applyNodeChanges,
} from "reactflow";
import dagre from "dagre";
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

const manualSRZNodesWithRealId = [
  {
    id: "vzkat_schild",
    type: "rightPort",
    position: { x: 0, y: 200 },
    data: vzkat.vzkat_schild,
  },
  {
    id: "vzkat_richtung",
    type: "leftPort",
    position: { x: 350, y: 200 },
    data: vzkat.vzkat_richtung,
  },
  {
    id: "vzkat_zeichen",
    type: "leftPort",
    position: { x: 350, y: 400 },
    data: vzkat.vzkat_zeichen,
  },
];
const simpleSRZEdgesWithRealId = [
  {
    id: "e2-3",
    source: "vzkat_schild",
    target: "vzkat_richtung",
    sourceHandle: "handle-source-vzkat_richtung",
    targetHandle: "handle-vzkat_richtung",
  },
  {
    id: "e1-3",
    source: "vzkat_schild",
    target: "vzkat_zeichen",
    sourceHandle: "handle-source-vzkat_zeichen",
    targetHandle: "handle-vzkat_zeichen",
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

const SchilSourcedWithIdNodes = ({ id, data }) => {
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
                    id={"handle-source-vzkat_richtung"}
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
                    id={"handle-source-vzkat_zeichen"}
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
export const SRZRealIdConnection = () => {
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
        nodes={manualSRZNodesWithRealId}
        edges={simpleSRZEdgesWithRealId}
        fitView
        nodeTypes={{
          rightPort: SchilSourcedWithIdNodes,
          leftPort: PortLeftHandleWithId,
        }}
      />
    </div>
  );
};

const DetectPortAutomatic = ({ id, data }) => {
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
              {buildRowWithPorts(item.name, id)}
            </div>
          );
        })}
      </div>
    </div>
  );
};

function buildRowWithPortsCids(rowName, id) {
  if (rowName.name.startsWith("fk")) {
    const correctName = rowName.name.split("_")[1];
    return (
      <div style={{ position: "relative" }}>
        {rowName.name}
        <Handle
          type="source"
          position={Position.Right}
          id={`handle-source-${rowName.cidsType}`}
          style={{
            top: 5,
            right: -12,
            background: "#494949",
            border: "1px solid #e5e7eb",
          }}
        />
      </div>
    );
  } else if (rowName.name === "id") {
    return (
      <div style={{ position: "relative" }}>
        {rowName.name}
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
    );
  } else {
    return <div>{rowName.name}</div>;
  }
}

function buildNodeAndEdgeCids(dbarr, mainDbName) {
  const customNodes = [];
  const customEdges = [];

  dbarr.forEach((item) => {
    const { name, attributes } = item;
    const node = {
      id: name,
      type: name === mainDbName ? "rightPort" : "leftPort",
      position: { x: 0, y: 0 },
      data: item,
    };

    customNodes.push(node);

    const atrArr = Object.keys(attributes);
    const portsNameArr = atrArr.filter(
      (idx) => idx.startsWith("fk") || idx === "id"
    );
    const getCidsName = portsNameArr.map((atr) => {
      return atr !== "id" ? attributes[atr].cidsType : "id";
    });

    getCidsName.forEach((item, idx) => {
      console.log("ccc buildNodeAndEdgeCids item", item);
      console.log("ccc buildNodeAndEdgeCids name", name);

      if (item.startsWith("fk")) {
        const correctName = item.split("_")[1];
        const edge = {
          id: `e${name}${idx}`,
          source: name,
          target: item,
          sourceHandle: `handle-source-${item}`,
          targetHandle: `handle-${item}`,
        };

        customEdges.push(edge);
      } else {
        const edge = {
          id: `e${name}!!!${idx}`,
          source: findNodeSourceCids(dbarr, name, item),
          // source: findNodeSource(dbarr, name),
          target: name,
          sourceHandle: `handle-source-${name}`,
          targetHandle: `handle-${item}`,
        };

        customEdges.push(edge);
      }
    });
  });

  console.log("ccc cids", customNodes, customEdges);

  return { customNodes, customEdges };
}

const DetectPortAutomatiCids = ({ id, data }) => {
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
              {/* {buildRowWithPorts(item.name, id)} */}
              {buildRowWithPortsCids(item, id)}
            </div>
          );
        })}
      </div>
    </div>
  );
};

function buildRowWithPorts(rowName, id) {
  if (rowName.startsWith("fk")) {
    const correctName = rowName.split("_")[1];
    console.log("xxx build fk id", rowName);
    return (
      <div style={{ position: "relative" }}>
        {rowName}
        <Handle
          type="source"
          position={Position.Right}
          id={`handle-source-vzkat_${correctName}`}
          style={{
            top: 5,
            right: -12,
            background: "#494949",
            border: "1px solid #e5e7eb",
          }}
        />
      </div>
    );
  } else if (rowName === "id") {
    return (
      <div style={{ position: "relative" }}>
        {rowName}
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
    );
  } else {
    return <div>{rowName}</div>;
  }
}

export const SRZBuildPortConnection = () => {
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
        nodes={manualSRZNodesWithRealId}
        edges={simpleSRZEdgesWithRealId}
        fitView
        nodeTypes={{
          rightPort: DetectPortAutomatic,
          leftPort: DetectPortAutomatic,
        }}
      />
    </div>
  );
};

function buildNodeAndEdge(dbarr) {
  const customNodes = [];
  const customEdges = [];
  dbarr.forEach((item) => {
    const { name, attributes } = item;
    console.log("ddd node attributes", attributes);
    console.log("ddd node name", name);
    const node = {
      id: name,
      type: name === "vzkat_schild" ? "rightPort" : "leftPort",
      position:
        name === "vzkat_schild"
          ? { x: 0, y: 200 }
          : name === "vzkat_richtung"
          ? { x: 350, y: 200 }
          : { x: 350, y: 30 },
      data: item,
    };

    customNodes.push(node);

    const atrArr = Object.keys(attributes);
    const portsNameArr = atrArr.filter(
      (idx) => idx.startsWith("fk") || idx === "id"
    );
    portsNameArr.forEach((item, idx) => {
      if (item.startsWith("fk")) {
        const correctName = item.split("_")[1];
        const edge = {
          id: `e${name}${idx}`,
          source: name,
          target: `vzkat_${correctName}`,
          sourceHandle: `handle-source-vzkat_${correctName}`,
          targetHandle: `handle-vzkat_${correctName}`,
        };

        customEdges.push(edge);
      } else {
        const edge = {
          id: `e${name}!!!${idx}`,
          source: findNodeSource(dbarr, name),
          target: name,
          sourceHandle: `handle-source-${name}`,
          targetHandle: `handle-${name}`,
        };

        customEdges.push(edge);
      }
    });
  });

  return { customNodes, customEdges };
}

function findNodeSource(dbarr, targetName) {
  const clearName = targetName.split("_")[1];
  const fkName = `fk_${clearName}`;
  let sourseName;
  dbarr.forEach((node) => {
    const { name, attributes } = node;
    console.log("ttt debug find func", attributes);
    const atrObj = Object.keys(attributes);
    if (atrObj.includes(fkName)) {
      sourseName = name;
    }
  });
  return sourseName ? sourseName : targetName;
}
function findNodeSourceCids(dbarr, targetName, typeCids) {
  console.log("ccc findNodeSourceCids", dbarr, targetName, typeCids);
  const clearName = targetName.split("_")[1];
  const fkName = `fk_${clearName}`;
  let sourseName;
  dbarr.forEach((node) => {
    const { name, attributes } = node;
    const atrObj = Object.keys(attributes);
    atrObj.forEach((item) => {
      if (attributes[item].cidsType === typeCids) {
        // console.log("ccc xxx", attributes[item].name);
        console.log("ccc xxx", node);
        sourseName = node.name;
      }
    });
  });
  return sourseName ? sourseName : targetName;
}

const { customNodes, customEdges } = buildNodeAndEdge([
  vzkat.vzkat_schild,
  vzkat.vzkat_richtung,
  vzkat.vzkat_zeichen,
]);

export const SRZBuildNodesEdgaseConnection = () => {
  const [nodes, setNodes] = useState(customNodes);
  const [edges, setEdges] = useState(customEdges);

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  );
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
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        fitView
        nodeTypes={{
          rightPort: DetectPortAutomatic,
          leftPort: DetectPortAutomatic,
        }}
      />
    </div>
  );
};

const DetectPortAutomaticWithoutPosition = ({ id, data }) => {
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
              {buildRowWithPorts(item.name, id)}
            </div>
          );
        })}
      </div>
    </div>
  );
};

function buildNodeAndEdgeWithoutPosition(dbarr, mainDbName) {
  const customNodes = [];
  const customEdges = [];
  dbarr.forEach((item) => {
    const { name, attributes } = item;
    const node = {
      id: name,
      type: name === mainDbName ? "rightPort" : "leftPort",
      position: { x: 0, y: 0 },
      data: item,
    };

    customNodes.push(node);

    const atrArr = Object.keys(attributes);
    const portsNameArr = atrArr.filter(
      (idx) => idx.startsWith("fk") || idx === "id"
    );
    const getCidsName = portsNameArr.map((atr) => {
      return atr !== "id" ? attributes[atr].cidsType : "id";
    });
    getCidsName.forEach((item, idx) => {
      if (item.startsWith("fk")) {
        const correctName = item.split("_")[1];
        const edge = {
          id: `e${name}${idx}`,
          source: name,
          // target: `vzkat_${correctName}`,
          target: item,
          sourceHandle: `handle-source-vzkat_${correctName}`,
          targetHandle: `handle-vzkat_${correctName}`,
        };

        customEdges.push(edge);
      } else {
        const edge = {
          id: `e${name}!!!${idx}`,
          source: findNodeSource(dbarr, name),
          target: name,
          sourceHandle: `handle-source-${name}`,
          targetHandle: `handle-${name}`,
        };

        customEdges.push(edge);
      }
    });
  });

  // console.log("xxx cids !!!", customNodes, customEdges);

  return { customNodes, customEdges };
}

const { customNodes: srzsNode, customEdges: srzsEdges } =
  buildNodeAndEdgeWithoutPosition(
    [
      vzkat.vzkat_schild,
      vzkat.vzkat_richtung,
      vzkat.vzkat_zeichen,
      vzkat.vzkat_standort,
      vzkat.vzkat_stvo,
    ],
    "vzkat_schild"
  );

export const SRZBuildWithoutPositionConnection = () => {
  const [nodes, setNodes] = useState(srzsNode);
  const [edges, setEdges] = useState(srzsEdges);
  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  );
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
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        fitView
        nodeTypes={{
          rightPort: DetectPortAutomatic,
          leftPort: DetectPortAutomatic,
        }}
      />
    </div>
  );
};

const dagreGraph = new dagre.graphlib.Graph();
dagreGraph.setDefaultEdgeLabel(() => ({}));
const nodeWidth = 200;
const nodeHeight = 300;
const getLayoutedElements = (nodes, edges, direction = "LR") => {
  const isHorizontal = direction === "LR";
  dagreGraph.setGraph({ rankdir: direction });

  nodes.forEach((node) => {
    dagreGraph.setNode(node.id, { width: nodeWidth, height: nodeHeight });
  });

  edges.forEach((edge) => {
    dagreGraph.setEdge(edge.source, edge.target);
  });

  dagre.layout(dagreGraph);

  nodes.forEach((node) => {
    const nodeWithPosition = dagreGraph.node(node.id);
    node.targetPosition = isHorizontal ? "left" : "top";
    node.sourcePosition = isHorizontal ? "right" : "bottom";

    // We are shifting the dagre node position (anchor=center center) to the top left
    // so it matches the React Flow node anchor point (top left).
    node.position = {
      x: nodeWithPosition.x - nodeWidth / 2,
      y: nodeWithPosition.y - nodeHeight / 2,
    };

    return node;
  });

  return { nodes, edges };
};

const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(
  srzsNode,
  srzsEdges
);

export const SRZBuildWithoutPositionDagre = () => {
  const [nodes, setNodes] = useState(layoutedNodes);
  const [edges, setEdges] = useState(layoutedEdges);
  console.log("xxx cids !!!", edges);

  // const onNodesChange = useCallback(
  //   (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
  //   [setNodes]
  // );
  // const onEdgesChange = useCallback(
  //   (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
  //   [setEdges]
  // );
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
        nodes={srzsNode}
        edges={srzsEdges}
        // onNodesChange={onNodesChange}
        // onEdgesChange={onEdgesChange}
        fitView
        nodeTypes={{
          rightPort: DetectPortAutomatic,
          leftPort: DetectPortAutomatic,
        }}
      />
    </div>
  );
};

const { customNodes: srzsaNode, customEdges: srzsaEdges } =
  buildNodeAndEdgeCids(
    [
      vzkat.vzkat_schild,
      vzkat.vzkat_richtung,
      vzkat.vzkat_zeichen,
      vzkat.vzkat_standort,
      vzkat.vzkat_stvo,
      vzkat.vzkat_zeichen_art,
    ],
    "vzkat_schild"
  );

const { nodes: layoutedSrzsaNodes, edges: layoutedSrzsaEdges } =
  getLayoutedElements(srzsaNode, srzsaEdges);

export const SRZSABuildDagre = () => {
  const [nodes, setNodes] = useState(layoutedSrzsaNodes);
  const [edges, setEdges] = useState(layoutedSrzsaEdges);
  console.log("ccc edges", edges);
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
        nodes={nodes}
        edges={edges}
        fitView
        nodeTypes={{
          rightPort: DetectPortAutomatiCids,
          leftPort: DetectPortAutomatiCids,
        }}
      />
    </div>
  );
};
