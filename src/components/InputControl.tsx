import { useState } from "react";
import { FC } from "react";

const InputControl: FC = () => {
  const [text, setText] = useState<string>();
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };
  return (
    <div>
      <input placeholder="Enter something" onChange={handleOnChange} />
      <h3>{text}</h3>
    </div>
  );
};

export default InputControl;
