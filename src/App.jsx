import { useState } from "react";
import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import HomeView from "./pages/HomeView";
import LoginView from "./pages/LoginView";
import NavbarTailwind from "./components/navbar/NavbarTailwind";

function App() {
  return (
    <>
      <NavbarTailwind />
      <Routes>
        <Route path="/" element={<HomeView />}></Route>

        <Route path="/login" element={<LoginView />}></Route>
      </Routes>
    </>
  );
}
export default App;
