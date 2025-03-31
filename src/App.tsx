import "./App.css";
import { FC } from "react";
import MyButton from "./components/MyButton";
import InputControl from "./components/InputControl";

const App: FC = () => {
  return (
    <div className="App">
      {/* <MyButton text="Click Me" onClick={() => alert("hello world")} /> */}
      <MyButton text="anotherBtn" />
      <InputControl />
    </div>
  );
};

export default App;
