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
  title: "Stories/DBCidsConnection",
};
const portLeft = {
  top: 5,
  left: -12,
  background: "#494949",
  border: "1px solid #e5e7eb",
};
const portRight = {
  top: 5,
  right: -12,
  background: "#494949",
  border: "1px solid #e5e7eb",
};
const cardBodyGray = {
  backgroundColor: "#e0e0e0",
  margin: "0",
  padding: "1px 0px",
  borderRadius: "0px 0px 8px 8px",
};

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

const manualNodes = [
  {
    id: "vzkat_zeichen",
    type: "rightPort",
    position: { x: 100, y: 200 },
    data: vzkat.vzkat_zeichen,
    relatinship: [{ fk_art: "vzkat_zeichen_art" }, { fk_stvo: "vzkat_stvo" }],
  },
  {
    id: "vzkat_zeichen_art",
    type: "leftPort",
    position: { x: 400, y: 200 },
    data: vzkat.vzkat_zeichen_art,
    relatinship: [],
  },
];
const manualEdges = [
  {
    id: "e2-3",
    source: "vzkat_zeichen",
    target: "vzkat_zeichen_art",
  },
];

function buildRowWithPorts(rowName, id) {
  if (rowName.startsWith("fk")) {
    return (
      <div style={{ position: "relative" }} key={rowName + id}>
        {rowName}
        <Handle
          type="source"
          position={Position.Right}
          id={`handle-source-${rowName}`}
          style={portRight}
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
          id={`handle-target-${id}`}
          style={portRight}
        />
      </div>
    );
  } else {
    return <div>{rowName}</div>;
  }
}
const PortGenerator = ({ id, data }) => {
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
          return buildRowWithPorts(item.name, id);
        })}
      </div>
    </div>
  );
};

export const HandleWithoutId = () => {
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
        edges={manualEdges}
        fitView
        nodeTypes={{
          rightPort: PortGenerator,
          leftPort: PortGenerator,
        }}
      />
    </div>
  );
};

const manualNodesWIthId = [
  {
    id: "vzkat_zeichen",
    type: "rightPort",
    position: { x: 100, y: 200 },
    data: vzkat.vzkat_zeichen,
    relatinship: [{ fk_art: "vzkat_zeichen_art" }, { fk_stvo: "vzkat_stvo" }],
  },
  {
    id: "vzkat_zeichen_art",
    type: "leftPort",
    position: { x: 400, y: 200 },
    data: vzkat.vzkat_zeichen_art,
    relatinship: [],
  },
  {
    id: "vzkat_stvo",
    type: "leftPort",
    position: { x: 400, y: 400 },
    data: vzkat.vzkat_stvo,
    relatinship: [],
  },
];
const manualEdgesWithID = [
  {
    id: "e2-3",
    source: "vzkat_zeichen",
    target: "vzkat_zeichen_art",
    sourceHandle: "handle-source-fk_stvo",
    targetHandle: "handle-target-vzkat_zeichen_art",
  },
  {
    id: "e2-4",
    source: "vzkat_zeichen",
    target: "vzkat_stvo",
    sourceHandle: "handle-source-fk_art",
    targetHandle: "handle-target-vzkat_stvo",
  },
];
export const HandleWithId = () => {
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
        nodes={manualNodesWIthId}
        edges={manualEdgesWithID}
        fitView
        nodeTypes={{
          rightPort: PortGenerator,
          leftPort: PortGenerator,
        }}
      />
    </div>
  );
};

const buildRelatinship = (attributes) => {
  const relatinship = [];
  Object.keys(attributes).forEach((attr) => {
    if (attributes[attr].name.startsWith("fk")) {
      relatinship.push({ [attr]: attributes[attr].cidsType });
    }
  });
  return relatinship;
};

const nodeEdgesGenerator = (arrDbTable) => {
  const customNodes = [];
  const customEdges = [];
  let xCord = 0;
  let yCord = 0;
  arrDbTable.forEach((item) => {
    const { name, attributes } = item;
    console.log("ddd node attributes", attributes);
    console.log("ddd node name", name);
    const node = {
      id: name,
      type: "leftPort",
      position: { x: xCord, y: yCord },
      data: item,
      relatinship: buildRelatinship(attributes),
    };

    customNodes.push(node);
    xCord += 300;
    yCord += 100;
  });
  // sourceHandle: "handle-source-fk_stvo",
  // targetHandle: "handle-target-vzkat_zeichen_art",
  customNodes.forEach((n) => {
    if (n.relatinship.length !== 0) {
      n.relatinship.forEach((r) => {
        const keyName = Object.keys(r)[0];
        const edge = {
          id: `${r.attr}-${n.id}`,
          source: n.id,
          target: r[keyName],
          sourceHandle: `handle-source-${keyName}`,
          targetHandle: `handle-target-${r[keyName]}`,
        };
        customEdges.push(edge);
      });
    }
  });

  console.log("fff nodeEdgesGenerator", customNodes);
  console.log("fff nodeEdgesGenerator", customEdges);
  return { customNodes, customEdges };
};

const { customNodes, customEdges } = nodeEdgesGenerator([
  vzkat.vzkat_schild,
  vzkat.vzkat_zeichen,
  vzkat.vzkat_zeichen_art,
  vzkat.vzkat_stvo,
  vzkat.vzkat_standort,
  vzkat.vzkat_richtung,
]);
// {
//   id: "e2-3",
//   source: "vzkat_zeichen",
//   target: "vzkat_zeichen_art",
// },

export const HandleWitFirstGenerator = () => {
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
        nodes={customNodes}
        edges={customEdges}
        fitView
        nodeTypes={{
          rightPort: PortGenerator,
          leftPort: PortGenerator,
        }}
      />
    </div>
  );
};
