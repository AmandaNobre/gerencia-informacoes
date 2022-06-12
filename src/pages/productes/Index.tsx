import { useNavigate } from "react-router-dom";
import { useContext } from "react";

import { ProductesContext } from "../../context/ProductesContext";
import { ButtonCustom } from "../../components/ButtonCustom";
import { CardCustom } from "../../components/CardCustom";
import TableCustom from "../../components/TableCustom";

import "./styles.scss";

const Productes = () => {
  const navigate = useNavigate();
  const { productes, remove } = useContext(ProductesContext);
  const titles = [
    "Categorias",
    "Nome do Produto",
    "Nome do Fornecedor",
    "Valor",
    "Ações",
  ];

  const toRegister = () => {
    navigate("/register");
  };

  const edit = (id: string) => {
    navigate(`/edit/${id}`);
  };

  return (
    <CardCustom>
      <div className="mb-5 justify-content-between d-flex">
        <h5 className="title">Produtos</h5>
        <ButtonCustom theme="primary" onClick={toRegister}>
          Cadastrar
        </ButtonCustom>
      </div>
      <TableCustom
        data={productes}
        titles={titles}
        remove={remove}
        edit={edit}
      />
    </CardCustom>
  );
};

export { Productes };
