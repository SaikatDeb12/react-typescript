import { FC, useState } from "react";
const Forms: FC = () => {
  //now to handle the name, age one wway is using diff states... or,
  // const [name, setName]=useState<string>();
  // const [age, setAge]=useState<number>();
  const [formData, setFormData] = useState({ name: "", age: "" });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //way to set value of name, age dynamically
    const { name, value } = event.target;
    setFormData((prevVal) => ({ ...prevVal, [name]: value }));
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label>Name</label>
        <input
          type="string"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          name="name"
        />
        <label>Age</label>
        <input
          type="number"
          placeholder="Enter Age"
          onChange={handleChange}
          value={formData.age}
          name="age"
        />
        <button type="submit">Submit</button>
      </form>
      {formData && <p>{`${formData.name} is of age: ${formData.age}`}</p>}
    </div>
  );
};

export default Forms;
