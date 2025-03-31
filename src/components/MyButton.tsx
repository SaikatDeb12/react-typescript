interface Props {
  text: string;
  onClick?: () => void;
}

const MyButton: React.FC<Props> = (props) => {
  return (
    <div>
      <button onClick={props.onClick}>{props.text}</button>
    </div>
  );
};

export default MyButton;
