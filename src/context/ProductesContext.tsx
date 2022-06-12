import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

import IProductes from "../interfaces/IProductes";

type PropProductesProvider = {
  children: JSX.Element;
};

const initialValue = {
  productes: [
    {
      id: "",
      productCategory: "",
      productName: "",
      providerrName: "",
      productPrice: 0,
    },
  ],
  register: (productes: IProductes) => {},
  remove: (id: string) => {},
  edit: (data: IProductes) => {},
};

export const ProductesContext = createContext(initialValue);

function ProductesProvider({ children }: PropProductesProvider) {
  const [productes, setProductes] = useState<IProductes[]>([]);

  const [actionRemove, setActionRemove] = useState(false);

  const edit = (data: IProductes) => {
    //todas as products fora a que está sendo editada
    const dados = productes.filter((item) => item.id !== data.id);
    setProductes([...dados, data]);
    toast.success("Sucesso ao editar produto");
  };

  const register = (data: IProductes) => {
    setProductes([...productes, data]);
    toast.success("Sucesso ao cadastrar produto");
  };

  const remove = (id: string) => {
    Swal.fire({
      icon: "question",
      text: "Deseja remover esse produto?",
      showCancelButton: true,
      confirmButtonText: "Excluir",
      confirmButtonColor: "red",
    }).then((result) => {
      if (result.isConfirmed) {
        setProductes(productes.filter((item) => item.id !== id));
        setActionRemove(true);
        toast.success("Sucesso ao excluir produto");
      }
    });
  };

  //Pega dados do localStorage quando reinicia a página
  useEffect(() => {
    if (productes.length === 0) {
      const localStorageProducts = localStorage.getItem("products");
      if (localStorageProducts) {
        const dados = JSON.parse(localStorageProducts);
        setProductes(dados);
      }
    }
  }, []);

  //Adiciona valor no localStorage sempre que products muda de valor
  //Caso o último registro da tablea seja apagado foi criado uma variável para tratar esse caso
  useEffect(() => {
    if (productes.length !== 0 || actionRemove) {
      localStorage.setItem("products", JSON.stringify(productes));
      setActionRemove(false);
    }
  }, [productes]);

  return (
    <ProductesContext.Provider
      value={{
        productes,
        register,
        remove,
        edit,
      }}
    >
      {children}
    </ProductesContext.Provider>
  );
}

export { ProductesProvider };
