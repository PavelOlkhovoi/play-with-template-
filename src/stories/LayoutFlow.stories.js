import { LayoutFlow } from "../components/LayoutFlow";
export default {
  component: LayoutFlow,
};

export const Flow = {
  args: {
    backgroundColor: "white",
    initialNodes: [
      {
        id: "1",
        position: { x: 0, y: 0 },
        data: { label: "1 Flow" },
        type: "input",
      },
      {
        id: "2",
        position: { x: 0, y: 100 },
        data: { label: "2 Flow" },
        type: "output",
      },
    ],
    initialEdges: [{ id: "e1-2", source: "1", target: "2" }],
  },
};
