import React, { useState } from 'react';
import styles from './SideBar.module.css'

type Props = {
  children?: JSX.Element;
  title: string;
  isSideBarOpen: boolean;
}

export default function SideBar({title, isSideBarOpen} : Props) {

  return (
    <div className={isSideBarOpen ? styles.container : styles.containerHidden}>

      {title}
    </div>
  );
}