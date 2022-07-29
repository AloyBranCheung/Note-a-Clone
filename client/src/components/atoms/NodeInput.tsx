import styles from "./NodeInput.module.css";

type Props = {
  inputText?: string;
};

export default function NodeInput({ inputText }: Props) {
  return (
    <input className={styles.node_input} type="text" defaultValue={inputText} />
  );
}
