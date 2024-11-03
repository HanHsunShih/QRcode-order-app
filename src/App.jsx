import { useState } from "react";
import { Header } from "./Components/Header/Header";
import "./App.scss";
import { MainMenu } from "./components/MainMenu/MainMenu";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <MainMenu />
    </>
  );
}

export default App;
