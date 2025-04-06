import "./styles/index.css";
import { Home } from "./components/sections/Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Authentication from "./components/signup/Authentication";
import ProductSelection from "./components/signup/ProductChoice";
import SkinAreaSelection from "./components/signup/product/skinAnalysis/SkinAreaSelection";
import GetReadyScreen from "./components/signup/product/skinAnalysis/GetReady";
import SkinAnalysisForm from "./components/signup/product/skinAnalysis/SkinAnalysisForm";
import ProductScanScreen from "./components/signup/product/productAnalysis/ScanProduct";
import SkinDisplayResult from "./components/signup/product/skinAnalysis/DisplaySkinResult";
import ProductDisplayResult from "./components/signup/product/productAnalysis/DisplayProductResult";
import UploadPhoto from "./components/signup/product/skinAgeAnalysis/UploadImage";
import SkinAgeAnalysisFlow from "./components/signup/product/skinAgeAnalysis/SkinAgeAnalysisFlow";
import ResultsPage from "./components/signup/product/skinAnalysis/result/SkinResult";
import ProductResultPage from "./components/signup/product/productAnalysis/result/ProductResult";
import HomePageSkin from "./components/homepage/HomePageSkin";
import HomePageProduct from "./components/homepage/HomePageProduct";
import UserProfile from "./components/profile/UserProfile";
import MyIngredients from "./components/ingredients/MyIngredients";
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
          path="/skin-analysis-display"
          element={
            <SkinDisplayResult logoSrc="/src/assets/sections/hero/Logo.png" />
          }
        />
        <Route
          path="/product-analysis-display"
          element={
            <ProductDisplayResult logoSrc="/src/assets/sections/hero/Logo.png" />
          }
        />
        <Route
          path="/skin-age-analysis-flow"
          element={<SkinAgeAnalysisFlow />}
        />
        <Route path="/skin-analysis-result" element={<ResultsPage />} />
        <Route
          path="/product-analysis-result"
          element={<ProductResultPage />}
        />
        <Route path="/dashboard" element={<Navigate to="/dashboard-skin" />} />
        <Route path="/dashboard-skin" element={<HomePageSkin />} />
        <Route path="/dashboard-product" element={<HomePageProduct />} />
        <Route path="/user-profile" element={<UserProfile />} />
        <Route path="/my-ingredients" element={<MyIngredients />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
