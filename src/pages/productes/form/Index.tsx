import { useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { ButtonCustom } from "../../../components/ButtonCustom";
import { InputCustom } from "../../../components/InputCustom";
import { CardCustom } from "../../../components/CardCustom";
import { FaArrowLeft } from "react-icons/fa";
import "./styles.scss";
import { ProductesContext } from "../../../context/ProductesContext";
import IProductes from "../../../interfaces/IProductes";
import { AlertCustom } from "../../../components/AlertCustom";
import { useNavigate, useParams } from "react-router-dom";

const initialState = {
  id: uuidv4(),
  categoria: "",
  nomeProduto: "",
  nomeFornecedor: "",
  valor: "",
};

const FormProducts = () => {
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
      producterRegister.categoria === "" ||
      producterRegister.nomeFornecedor === "" ||
      producterRegister.nomeProduto === "" ||
      producterRegister.valor === ""
    ) {
      setMessage("Preencha todos os campos obrigatórios");
    } else {
      if (label === "Cadastrar") {
        setProducterRegister(initialState);
        register(producterRegister);
      } else {
        console.log("producterRegister", producterRegister);
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
          <label className="title">{label} produto</label>
        </div>
        <ButtonCustom theme="primary" onClick={hanldeClick}>
          {label}
        </ButtonCustom>
      </div>
      <div className="twoColumns">
        <div>
          <label>Categoria do produto *</label>
          <InputCustom
            value={producterRegister.categoria}
            name="categoria"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Nome do produto *</label>
          <InputCustom
            value={producterRegister.nomeProduto}
            name="nomeProduto"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Nome do Fornecedor *</label>
          <InputCustom
            value={producterRegister.nomeFornecedor}
            name="nomeFornecedor"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Valor do produto *</label>
          <InputCustom
            value={producterRegister.valor}
            name="valor"
            onChange={handleChange}
            type={"number"}
          />
        </div>
      </div>
      {message !== "" && <AlertCustom>{message}</AlertCustom>}
    </CardCustom>
  );
};
export { FormProducts };
