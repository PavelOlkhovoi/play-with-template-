const position = { x: 0, y: 0 };
const edgeType = "smoothstep";

export const initialNodes = [
  {
    id: "1",
    type: "input",
    data: { label: "Barmen 3 153/25" },
    position,
  },
  {
    id: "2",
    data: { label: "Barmen 3 496/0" },
    position,
  },
  {
    id: "3",
    data: { label: "Barmen 3 498/0" },
    position,
  },
  {
    id: "4",
    data: { label: "Barmen 3 497/0" },
    position,
  },
  {
    id: "5",
    data: { label: "Barmen 3 501/0" },
    position,
  },
];

export const initialEdges = [
  { id: "e12", source: "1", target: "2", type: edgeType, animated: true },
  { id: "e13", source: "1", target: "3", type: edgeType, animated: true },
  { id: "e22a", source: "1", target: "4", type: edgeType, animated: true },
  { id: "e22b", source: "3", target: "5", type: edgeType, animated: true },
];
