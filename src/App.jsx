import "./App.css";
import {Route, Routes, NavLink } from "react-router";
import { Home } from "./pages/Home";
import { AboutMe } from "./pages/AboutMe";
import { Header } from "./components/Header";
import { useState } from "react";

function App() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <Header showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>

      {/* Sidebar menu */}
      <div className="flex flex-col gap-4 pt-4 pl-3 sidebar-menu" hidden={showSidebar ? false : true}>
        <NavLink to="/" className="text-lg font-semibold text-white" onClick={() => setShowSidebar(false)}>Home</NavLink>
        <NavLink to="/about" className="text-lg font-semibold text-white" onClick={() => setShowSidebar(false)}>About</NavLink>
      </div>

      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<AboutMe />}/>
      </Routes>
    </>
  );
}

export default App;
