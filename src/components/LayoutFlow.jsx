import React from "react";
import PropTypes from "prop-types";
import ReactFlow from "reactflow";

import "reactflow/dist/style.css";

const initialNodes = [
  { id: "1", position: { x: 0, y: 0 }, data: { label: "1" } },
  { id: "2", position: { x: 0, y: 100 }, data: { label: "2" } },
];
const initialEdges = [{ id: "e1-2", source: "1", target: "2" }];
export const LayoutFlow = ({
  backgroundColor = "blue",
  initialNodes = initialNodes,
  initialEdges = initialEdges,
}) => {
  return (
    <div
      style={{
        width: "400px",
        height: "400px",
        backgroundColor: backgroundColor,
        padding: "1rem",
      }}
    >
      <ReactFlow nodes={initialNodes} edges={initialEdges} />
    </div>
  );
};

LayoutFlow.propTypes = {
  backgroundColor: PropTypes.string,
  initialNodes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      position: PropTypes.shape({
        x: PropTypes.number,
        y: PropTypes.number,
      }),
      data: PropTypes.shape({
        label: PropTypes.string,
      }),
    })
  ),
  initialEdges: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      source: PropTypes.string,
      target: PropTypes.string,
    })
  ),
};

LayoutFlow.defaultProps = {
  backgroundColor: null,
};
