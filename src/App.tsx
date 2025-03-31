import "./App.css";
import { FC } from "react";
import MyButton from "./components/MyButton";

const App: FC = () => {
  return (
    <div className="App">
      {/* <MyButton text="Click Me" onClick={() => alert("hello world")} /> */}
      <MyButton text="anotherBtn" />
    </div>
  );
};

export default App;
