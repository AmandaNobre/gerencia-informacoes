import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import IProductes from "../interfaces/IProductes";
import Swal from "sweetalert2";

type PropProductesProvider = {
  children: JSX.Element;
};

const initialValue = {
  productes: [
    {
      id: "",
      categoria: "",
      nomeProduto: "",
      nomeFornecedor: "",
      valor: "",
    },
  ],
  register: (productes: IProductes) => {},
  remove: (id: string) => {},
  edit: (data: IProductes) => {},
};

export const ProductesContext = createContext(initialValue);

function ProductesProvider({ children }: PropProductesProvider) {
  const [productes, setProductes] = useState<IProductes[]>([]);

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
        console.log(
          "productes.filter((item) => item.id !== id)",
          productes.filter((item) => item.id !== id)
        );
        setProductes(productes.filter((item) => item.id !== id));
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
  useEffect(() => {
    if (productes.length !== 0) {
      localStorage.setItem("products", JSON.stringify(productes));
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
