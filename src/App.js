import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import "./App.css";
import Context from "./context";

const App = () => {
  return (
    <Context.Provider value={{}}>
      <div className="font-Nunito max-w-[1380px] my-0 mx-auto bg-[#FFF] shadow-App">
        <Header />
        <Home />
      </div>
    </Context.Provider>
  );
};

export default App;
