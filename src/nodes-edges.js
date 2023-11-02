const position = { x: 0, y: 0 };
const edgeType = "smoothstep";

// export const initialNodes = [
//   {
//     id: "1",
//     // type: "input",
//     data: { label: "Barmen 3 153/25" },
//     position,
//   },
//   {
//     id: "2",
//     data: { label: "Barmen 3 496/0" },
//     position,
//   },
//   {
//     id: "3",
//     data: { label: "Barmen 3 498/0" },
//     position,
//   },
//   {
//     id: "4",
//     data: { label: "Barmen 3 497/0" },
//     position,
//   },
//   {
//     id: "5",
//     data: { label: "Barmen 3 501/0" },
//     position,
//   },
// ];

// export const initialEdges = [
//   { id: "e12", source: "1", target: "2", type: edgeType, animated: true },
//   { id: "e13", source: "1", target: "3", type: edgeType, animated: true },
//   { id: "e22a", source: "1", target: "4", type: edgeType, animated: true },
//   { id: "e22b", source: "3", target: "5", type: edgeType, animated: true },
// ];

const historyData = [
  {
    alkis_id: "053485-013-00587",
    level: 1,
    nachfolger_alkis_id: "053485-013-00908",
    nachfolger_name: "Beyenburg 13 908/0",
    nachfolger_schluessel_id: 17987,
    schluessel_id: 11686,
    vorgaenger_alkis_id: "053485-013-00587",
    vorgaenger_name: "Beyenburg 13 587/0",
    vorgaenger_schluessel_id: 11686,
  },
  {
    alkis_id: "053485-013-00587",
    level: 2,
    nachfolger_alkis_id: "053485-013-00927",
    nachfolger_name: "Beyenburg 13 927/0",
    nachfolger_schluessel_id: 21838,
    schluessel_id: 11686,
    vorgaenger_alkis_id: "053485-013-00908",
    vorgaenger_name: "Beyenburg 13 908/0",
    vorgaenger_schluessel_id: 17987,
  },
];

const addedNodes = new Set();

export const initialNodesData = [];
export const initialEdgesData = [];
historyData.forEach((item, idx) => {
  const { nachfolger_name, vorgaenger_name } = item;
  if (!addedNodes.has(vorgaenger_name)) {
    initialNodesData.push({
      id: vorgaenger_name.replace(/\s/g, ""),
      data: { label: vorgaenger_name },
      position,
    });

    addedNodes.add(vorgaenger_name);
  }

  if (!addedNodes.has(nachfolger_name)) {
    initialNodesData.push({
      id: nachfolger_name.replace(/\s/g, ""),
      data: { label: nachfolger_name },
      position,
    });

    addedNodes.add(nachfolger_name);
  }

  if (vorgaenger_name !== nachfolger_name) {
    initialEdgesData.push({
      id: idx,
      source: vorgaenger_name.replace(/\s/g, ""),
      target: nachfolger_name.replace(/\s/g, ""),
      type: edgeType,
      animated: true,
    });
  }
});

// export const initialEdgesData = [
//   { id: "e12", source: "1", target: "2", type: edgeType, animated: true },
//   { id: "e13", source: "1", target: "3", type: edgeType, animated: true },
//   { id: "e22a", source: "1", target: "4", type: edgeType, animated: true },
//   { id: "e22b", source: "3", target: "5", type: edgeType, animated: true },
// ];

// [
//   {
//     alkis_id: "053001-003-00153/0025",
//     level: 1,
//     nachfolger_alkis_id: "053001-003-00496",
//     nachfolger_name: "Barmen 3 496/0",
//     nachfolger_schluessel_id: 23212,
//     schluessel_id: 1948,
//     vorgaenger_alkis_id: "053001-003-00153/0025",
//     vorgaenger_name: "Barmen 3 153/25",
//     vorgaenger_schluessel_id: 1948,
//   },
//   {
//     alkis_id: "053001-003-00153/0025",
//     level: 1,
//     nachfolger_alkis_id: "053001-003-00497",
//     nachfolger_name: "Barmen 3 497/0",
//     nachfolger_schluessel_id: 23213,
//     schluessel_id: 1948,
//     vorgaenger_alkis_id: "053001-003-00153/0025",
//     vorgaenger_name: "Barmen 3 153/25",
//     vorgaenger_schluessel_id: 1948,
//   },
//   {
//     alkis_id: "053001-003-00153/0025",
//     level: 1,
//     nachfolger_alkis_id: "053001-003-00498",
//     nachfolger_name: "Barmen 3 498/0",
//     nachfolger_schluessel_id: 23214,
//     schluessel_id: 1948,
//     vorgaenger_alkis_id: "053001-003-00153/0025",
//     vorgaenger_name: "Barmen 3 153/25",
//     vorgaenger_schluessel_id: 1948,
//   },
//   {
//     alkis_id: "053001-003-00153/0025",
//     level: 2,
//     nachfolger_alkis_id: "053001-003-00501",
//     nachfolger_name: "Barmen 3 501/0",
//     nachfolger_schluessel_id: 23252,
//     schluessel_id: 1948,
//     vorgaenger_alkis_id: "053001-003-00497",
//     vorgaenger_name: "Barmen 3 497/0",
//     vorgaenger_schluessel_id: 23213,
//   },
// ];

// [
//   {
//     alkis_id: "053485-013-00908",
//     level: 0,
//     nachfolger_alkis_id: "053485-013-00908",
//     nachfolger_name: "Beyenburg 13 908/0",
//     nachfolger_schluessel_id: 17987,
//     schluessel_id: 17987,
//     vorgaenger_alkis_id: "053485-013-00586",
//     vorgaenger_name: "Beyenburg 13 586/0",
//     vorgaenger_schluessel_id: 11685,
//   },
//   {
//     alkis_id: "053485-013-00908",
//     level: 0,
//     nachfolger_alkis_id: "053485-013-00908",
//     nachfolger_name: "Beyenburg 13 908/0",
//     nachfolger_schluessel_id: 17987,
//     schluessel_id: 17987,
//     vorgaenger_alkis_id: "053485-013-00587",
//     vorgaenger_name: "Beyenburg 13 587/0",
//     vorgaenger_schluessel_id: 11686,
//   },
//   {
//     alkis_id: "053485-013-00908",
//     level: 1,
//     nachfolger_alkis_id: "053485-013-00927",
//     nachfolger_name: "Beyenburg 13 927/0",
//     nachfolger_schluessel_id: 21838,
//     schluessel_id: 17987,
//     vorgaenger_alkis_id: "053485-013-00908",
//     vorgaenger_name: "Beyenburg 13 908/0",
//     vorgaenger_schluessel_id: 17987,
//   },
// ];
