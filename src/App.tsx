import { ToastContainer } from "react-toastify";
import { Layout } from "./contains/Layout";

import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.scss";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Layout />
    </div>
  );
}

export default App;
