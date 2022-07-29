import NodeInput from "../../atoms/NodeInput";

type Props = {
  children?: () => JSX.Element;
  inputText?: string;
};

export default function Node({ children, inputText }: Props) {
  return (
    <div>
      <NodeInput inputText={inputText} />
    </div>
  );
}
