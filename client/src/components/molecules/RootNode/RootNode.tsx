import Node from "../Node/Node";

/// returns a map of Nodes
export default function RootNode() {
  const data = [
    { text: "first" },
    {
      text: "second",
      children: [{ text: "second first child", children: [] }],
    },
    { text: "third" },
  ];

  return (
    <div>
      {data.map((data, index) => {
        if (data.text && !data.children) {
          return <Node key={index} inputText={data.text}></Node>;
        }
        if (data.text && data.children) {
          return (
            <div>
              <Node key={index} inputText={data.text}></Node>
            </div>
          );
        }
      })}
    </div>
  );
}
