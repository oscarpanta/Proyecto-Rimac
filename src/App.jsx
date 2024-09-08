import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Planes } from "./pages/Planes";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { RouteProtected } from "./components/Plans/RouteProtected";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<RouteProtected />}>
            <Route path="/planes" element={<Planes />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </React.StrictMode>
  );
};

export default App;
