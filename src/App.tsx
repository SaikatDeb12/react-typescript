import "./App.css";
import { FC } from "react";
import MyButton from "./components/MyButton";

const App: FC = () => {
  return (
    <div className="App">
      <MyButton text="Click Me" onClick={() => alert("hello world")} />
    </div>
  );
};

export default App;
