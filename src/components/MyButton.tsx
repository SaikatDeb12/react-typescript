import { useState } from "react";

interface Props {
  text: string;
  onClick?: () => void;
}

interface Book {
  name: string;
  price: number;
}

const MyButton: React.FC<Props> = ({ text, onClick }) => {
  const [count, setCount] = useState(1);
  const [value, setValue] = useState<Book>();

  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click Me
      </button>
      <button
        onClick={() => {
          setValue({ name: "solo leveling", price: 1234 });
        }}
      >
        Show Details
      </button>
      {value && (
        <p>{`Book name: ${value?.name} with price: ${value?.price}`}</p>
      )}
    </div>
  );
};

export default MyButton;
