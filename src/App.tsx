import "./App.css";
import { FC } from "react";
import MyButton from "./components/MyButton";
import InputControl from "./components/InputControl";
import Forms from "./components/Forms";

const App: FC = () => {
  return (
    <div className="App">
      {/* <MyButton text="Click Me" onClick={() => alert("hello world")} /> */}
      <MyButton text="anotherBtn" />
      <InputControl />
      <Forms />
    </div>
  );
};

export default App;
