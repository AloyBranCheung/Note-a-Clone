import styles from "./MainPage.module.css";
import RootNode from "../RootNode/RootNode";

export default function MainPage() {
  return (
    <div className={styles.main}>
      <div className={styles.main_text}>
        <RootNode />
      </div>
    </div>
  );
}
