import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Productes } from "../pages/productes/Index";

const PagesRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Productes />} />
      </Routes>
    </BrowserRouter>
  );
};

export { PagesRoutes };
