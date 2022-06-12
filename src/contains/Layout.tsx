import { BrowserRouter, Route, Routes } from "react-router-dom";

import { FaBoxOpen } from "react-icons/fa";

import { ProductesProvider } from "../context/ProductesContext";
import { FormProducts } from "../pages/productes/form/Index";
import { Productes } from "../pages/productes/Index";

import "./styles.scss";

const Layout = () => {
  return (
    <div className="d-flex divApp">
      <div className="divMenu bg-dark text-white p-3">
        <div>
          <FaBoxOpen className="iconBox" size={20} />
          <label>Dashboard</label>
        </div>
        <hr />
        <ul className="nav nav-pills flex-column">
          <li className="nav-item">
            <a href="/" className="nav-link text-white active">
              Produtos
            </a>
          </li>
        </ul>
      </div>
      <div className="container-fluid">
        <BrowserRouter>
          <ProductesProvider>
            <Routes>
              <Route path="/" element={<Productes />} />
              <Route path="/register" element={<FormProducts />} />
              <Route path="/edit/:id" element={<FormProducts />} />
            </Routes>
          </ProductesProvider>
        </BrowserRouter>
      </div>
    </div>
  );
};

export { Layout };
