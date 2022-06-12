import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProductesProvider } from "../context/ProductesContext";
import { Productes } from "../pages/productes/Index";
import { FormProducts } from "../pages/productes/form/Index";

import "./styles.scss";

const Layout = () => {
  return (
    <div className="d-flex divApp">
      <div className="divMenu"></div>
      <div className="divContent">
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
