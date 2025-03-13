import { useState } from "react";
import "./styles/index.css";
import { Home } from "./components/sections/Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Authentication from "./components/signup/Authentication";
import ProductSelection from "./components/signup/ProductChoice";
import SkinAreaSelection from "./components/signup/product/skinAnalysis/SkinAreaSelection";
import GetReadyScreen from "./components/signup/product/skinAnalysis/GetReady";
import UserProfileForm from "./components/signup/product/skinAnalysis/Details1A";
import SkinTypeSelection from "./components/signup/product/skinAnalysis/Details1B";
import SkinGoalsSelection from "./components/signup/product/skinAnalysis/Details1C";
import AllergiesQuestion from "./components/signup/product/skinAnalysis/AllergyAndSensitivity1A";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Authentication />} />
        <Route path="/product-choice" element={<ProductSelection />} />
        <Route path="/skin-area-selection" element={<SkinAreaSelection />} />
        <Route path="/get-ready/:skinType" element={<GetReadyScreen />} />
        <Route path="/user-details/:skinType" element={<UserProfileForm />} />
        <Route path="/skin-type/:skinType" element={<SkinTypeSelection />} />
        <Route path="/skin-goals/:skinType" element={<SkinGoalsSelection />} />
        <Route path="/allergies/:skinType" element={<AllergiesQuestion />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
