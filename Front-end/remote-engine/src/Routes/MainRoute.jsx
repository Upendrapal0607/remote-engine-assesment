import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "../Pages/HomePage";
import { Register } from "../Pages/Register";
import { Onboarding } from "../Pages/Onboarding";
import { Login } from "../Componants/Login";
import { Clint } from "../Componants/Clint";
import { useSelector } from "react-redux";

export const MainRoute = () => {
  const data = useSelector((state) => state.UserReducer);
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/onboarding"
          element={data?.token ? <Onboarding /> : <Login />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/client" element={data?.token ? <Clint /> : <Login />} />
      </Routes>
    </div>
  );
};
