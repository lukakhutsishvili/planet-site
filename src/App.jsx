import { useState } from "react";
import Data from "./data.json";
import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components";
import Main from "./pages/main";
import Menu from "./components/menu";

function App() {
  const [data, setdata] = useState(Data);

  return (
    <>
      <Header data={data} />
      <Routes>
        <Route path="/:name" element={<Main data={data} /> }></Route>
        <Route path="/menu" element={<Menu data={data}/>}></Route>
      </Routes>
    </>
  );
}

export default App;
