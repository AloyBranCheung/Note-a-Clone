import React, { useState } from 'react';
import styles from './TopNavBar.module.css'

type Props = {
  children?: JSX.Element;
  title: string;
  setIsSideBar: Function;
}

export default function TopNavBar({title, setIsSideBar} : Props) {


  return (
    <div className={styles.container}>
      <button type="button" onClick={() => setIsSideBar((prev: Boolean) => !prev)}>Menu</button>
      {title}
    </div>
  );
}