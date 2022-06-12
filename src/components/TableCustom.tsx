import { FaTrash, FaPen } from "react-icons/fa";

import styled from "styled-components";

import IProductes from "../interfaces/IProductes";
import { LottieCustom } from "./LottieCustom";
interface IProps {
  data: Array<IProductes>;
  titles: Array<string>;
  remove: Function;
  edit: Function;
}

const StyledTable = styled.table`
  width: 100%;
  border: 1px solid var(--darkGrey);

  td {
    padding: 5px 10px;
  }

  tbody tr {
    border: 1px solid var(--darkGrey);
  }
  thead > tr {
    background-color: #f9f9f9;
  }

  th {
    padding-left: 10px;
  }
`;

export default ({ data, titles, remove, edit }: IProps) =>
  data.length === 0 ? (
    <>
      <LottieCustom name="search" />
      <label>Nenhum produto encontrado</label>
    </>
  ) : (
    <StyledTable>
      <thead>
        <tr>
          {titles.map((title, index) => (
            <th key={index}>{title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <>
            {console.log("item", item)}
            <tr key={index}>
              <td>{item.productCategory}</td>
              <td>{item.productName}</td>
              <td>{item.providerrName}</td>
              <td>
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(item.productPrice)}
              </td>
              <td>
                <FaTrash onClick={() => remove(item.id)} className="iconBox" />
                <FaPen onClick={() => edit(item.id)} />
              </td>
            </tr>
          </>
        ))}
      </tbody>
    </StyledTable>
  );
