import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Detail from "./pages/Detail";
import Form from "./pages/Form";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form">
            <Route index element={<Form />} />
            <Route path="/form/detail" element={<Detail />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
