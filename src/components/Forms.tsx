import { FC, useState } from "react";
const Forms: FC = () => {
  //now to handle the name, age using states
  // const [name, setName]=useState<string>();
  // const [age, setAge]=useState<number>();

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label>Name</label>
        <input type="string" placeholder="Enter your name" />
        <label>Age</label>
        <input type="number" placeholder="Enter Age" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Forms;
