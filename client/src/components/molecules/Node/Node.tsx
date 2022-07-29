import React, { useState } from "react";
import styles from "./SideBar.module.css";

type Props = {
  children?: JSX.Element;
  text?: string;
  childNodes?: any[];
  addNodeF?: Function;
};

export default function Node({ text, childNodes = [], addNodeF }: Props) {
  const [childrenN, setChildrenN] = useState(childNodes || []);
  const [curNodes, setCurNodes] = useState([]);

  const addNode = () => {
    setChildrenN((prev) => {
      let newArr = [...prev];
      newArr.push({ text: "a", childNodes: [] });
      return newArr;
    });
  };
  const handleKeyDown = (e: any) => {
    // e?.preventDefault();
    if (e?.key === "Enter") {
      if (addNodeF) addNodeF();
    }
  };
  return (
    <div style={{ paddingLeft: "15px" }}>
      <input type="text" defaultValue={text} onKeyDown={handleKeyDown}></input>
      <div>
        {childrenN.length > 0 &&
          childrenN?.map((node, ind) => {
            return (
              <Node
                key={ind}
                text={node?.text}
                childNodes={node?.childNodes || []}
                addNodeF={addNode}
              />
            );
          })}
      </div>
    </div>
  );
}
