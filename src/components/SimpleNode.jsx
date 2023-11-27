import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";
import ReactFlow, { applyEdgeChanges, applyNodeChanges } from "reactflow";
import "./nodes.css";
import "reactflow/dist/style.css";

const initialNodes = [
  { id: "1", position: { x: 200, y: 200 }, data: { label: "13 908/0" } },
  {
    id: "2",
    position: { x: 200, y: 300 },
    data: { label: "13 927" },
    type: "output",
  },
  {
    id: "3",
    position: { x: 100, y: 100 },
    data: { label: "13 586" },
    type: "input",
    className: "single-node",
  },
  {
    id: "4",
    position: { x: 260, y: 100 },
    data: { label: "13 587" },
    type: "input",
  },
];
const initialEdges = [
  { id: "e1-2", source: "1", target: "2", isConnectableStart: false },
  { id: "e1-3", source: "3", target: "1", isConnectableStart: false },
  { id: "e1-4", source: "4", target: "1", isConnectableStart: false },
];
export const SimpleNode = ({ backgroundColor = "blue" }) => {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

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
        width: "400px",
        height: "400px",
        backgroundColor: backgroundColor,
        padding: "1rem",
      }}
    >
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        // nodesConnectable={false}
      />
    </div>
  );
};

SimpleNode.propTypes = {
  backgroundColor: PropTypes.string,
};

SimpleNode.defaultProps = {
  backgroundColor: null,
};
