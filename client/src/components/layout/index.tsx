import React, { useState } from 'react';

import TopNavBar from '../molecules/TopNavBar/TopNavBar';
import SideBar from '../molecules/SideBar/SideBar'
import styles from './Layout.module.css'
import Node from '../molecules/Node/Node';
type Props = {
  children: JSX.Element
}

export default function Layout({children}: Props) {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false)

  return (
    <div className={styles.container}>
      <TopNavBar title="Note-a-Clone" setIsSideBar={setIsSideBarOpen}/>
      <SideBar title="SideBar" isSideBarOpen={isSideBarOpen}/>
      {children}
      <Node text="First" childNodes={[{text: '1', childNodes: [{text: '3', childNodes: []}]}]}/>
    </div>
  );
}