import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppJSX from "./AppJSX";
import AskMePage from "./Pages/AskMePage";
import Test from "./Pages/Test";
import BlogPage from './Pages/BlogPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppJSX />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
