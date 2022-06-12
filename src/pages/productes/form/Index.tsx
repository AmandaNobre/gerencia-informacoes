import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { FaArrowLeft } from "react-icons/fa";

import { ProductesContext } from "../../../context/ProductesContext";
import { ButtonCustom } from "../../../components/ButtonCustom";
import { InputCustom } from "../../../components/InputCustom";
import { AlertCustom } from "../../../components/AlertCustom";
import { CardCustom } from "../../../components/CardCustom";
import IProductes from "../../../interfaces/IProductes";

import "../styles.scss";

const FormProducts = () => {
  const initialState = {
    id: uuidv4(),
    productCategory: "",
    productName: "",
    providerrName: "",
    productPrice: 0,
  };

  const [producterRegister, setProducterRegister] =
    useState<IProductes>(initialState);

  const [message, setMessage] = useState<string>("");
  const [label, setLabel] = useState<string>("Cadastrar");

  const navigate = useNavigate();
  const { id } = useParams();

  const { register, productes, edit } = useContext(ProductesContext);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const name = event.target.name;
    const value = event.target.value;
    setProducterRegister({ ...producterRegister, [name]: value });
  }

  const hanldeClick = () => {
    setMessage("");
    if (
      producterRegister.productCategory === "" ||
      producterRegister.providerrName === "" ||
      producterRegister.productName === "" ||
      producterRegister.productPrice === 0
    ) {
      setMessage("Preencha todos os campos obrigatórios");
    } else {
      if (label === "Cadastrar") {
        setProducterRegister(initialState);
        register(producterRegister);
      } else {
        edit(producterRegister);
        navigate("/");
      }
    }
  };

  const goBack = () => {
    navigate("/");
  };

  useEffect(() => {
    if (id) {
      const productSelecioned = productes.filter((item) => item.id === id);
      setProducterRegister(productSelecioned[0]);
      setLabel("Editar");
    }
  }, []);

  return (
    <CardCustom>
      <div className="d-flex justify-content-between mb-4">
        <div className="d-flex">
          <ButtonCustom theme="secondary" onClick={goBack}>
            <FaArrowLeft color="var(--green)" />
          </ButtonCustom>
          <h5 className="title">{label} produto</h5>
        </div>
        <ButtonCustom theme="primary" onClick={hanldeClick}>
          {label}
        </ButtonCustom>
      </div>
      <div>
        <label>Categoria do produto *</label>
        <div>
          <InputCustom
            value={producterRegister.productCategory}
            name="productCategory"
            onChange={handleChange}
          />
        </div>
      </div>
      <div>
        <label>Nome do produto *</label>
        <div>
          <InputCustom
            value={producterRegister.productName}
            name="productName"
            onChange={handleChange}
          />
        </div>
      </div>
      <div>
        <label>Nome do Fornecedor *</label>
        <div>
          <InputCustom
            value={producterRegister.providerrName}
            name="providerrName"
            onChange={handleChange}
          />
        </div>
      </div>
      <div>
        <label>Valor do produto *</label>
        <div>
          <InputCustom
            value={producterRegister.productPrice}
            name="productPrice"
            onChange={handleChange}
            type="number"
          />
        </div>
      </div>
      {message !== "" && <AlertCustom>{message}</AlertCustom>}
    </CardCustom>
  );
};
export { FormProducts };
