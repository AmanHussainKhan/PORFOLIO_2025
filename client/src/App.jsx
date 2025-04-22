import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppJSX from "./AppJSX";
import AskMePage from "./Pages/AskMePage";
import Test from "./Pages/Test";
import MyCommunity from './Pages/MyCommunity';
import CommunityHomePage from './Pages/CommunityHomePage';
import ProtectedRoute from './ProtectedRoute/ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppJSX />} />
        <Route element={<ProtectedRoute />} >
        <Route path="/communityhomepage" element={<CommunityHomePage />} />

        </Route>
        <Route path="/community" element={<MyCommunity />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
