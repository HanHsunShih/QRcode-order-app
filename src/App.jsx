import { useState } from "react";
import "./App.scss";
import { Header } from "./Components/Header/Header";
import { MainMenu } from "./components/MainMenu/MainMenu";
import { Footer } from "./components/Footer/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <MainMenu />
      <Footer />
    </>
  );
}

export default App;
