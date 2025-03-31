import { useState } from "react";

interface Props {
  text: string;
  onClick?: () => void;
}

const MyButton: React.FC<Props> = ({ text, onClick }) => {
  const [value, setValue] = useState(1);
  return (
    <div>
      <h1>{value}</h1>
      <button
        onClick={() => {
          setValue(value + 1);
        }}
      >
        Click Me
      </button>
    </div>
  );
};

export default MyButton;
