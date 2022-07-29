import React, { useState } from 'react';
import TopNavBar from '../molecules/TopNavBar/TopNavBar';
import SideBar from '../molecules/SideBar/SideBar'
type Props = {
  children: JSX.Element
}
export default function Layout({children}: Props) {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false)

  return (
    <div>
      <TopNavBar title="Note-a-Clone" setIsSideBar={setIsSideBarOpen}/>
      <SideBar title="SideBar" isSideBarOpen={isSideBarOpen}/>
      {children}
    </div>
  );
}