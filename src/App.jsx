import { useState } from "react";
import "./styles/index.css";
import { Home } from "./components/sections/Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Authentication from "./components/signup/Authentication";
import ProductSelection from "./components/signup/ProductChoice";
import SkinAreaSelection from "./components/signup/product/skinAnalysis/SkinAreaSelection";
import GetReadyScreen from "./components/signup/product/skinAnalysis/GetReady";
import SkinAnalysisForm from "./components/signup/product/skinAnalysis/SkinAnalysisForm";
import ProductScanScreen from "./components/signup/product/productAnalysis/ScanProduct";
import DisplayResult from "./components/signup/product/common/DisplayResult";
import UploadPhoto from "./components/signup/product/skinAgeAnalysis/UploadImage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Authentication />} />
        <Route path="/product-choice" element={<ProductSelection />} />
        <Route path="/skin-area-selection" element={<SkinAreaSelection />} />
        <Route path="/get-ready/:skinType" element={<GetReadyScreen />} />
        <Route path="/analysis/:skinType" element={<SkinAnalysisForm />} />
        <Route path="/scan-product" element={<ProductScanScreen />} />
        <Route path="/upload-image" element={<UploadPhoto />} />
        <Route
          path="/display-result"
          element={
            <DisplayResult logoSrc="/src/assets/sections/hero/Logo.png" />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
