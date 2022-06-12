import styled from "styled-components";
import IProductes from "../interfaces/IProductes";

import { FaTrash, FaPen } from "react-icons/fa";

interface IProps {
  data: Array<IProductes>;
  titles: Array<string>;
  remove: Function;
  edit: Function;
}

const StyledTable = styled.table`
  width: 100%;
  border: 1px solid var(--darkGrey);

  td,
  th {
  }
  /* td,
  th {
    border: 1px solid;
  } */

  td {
    padding: 5px 10px;
  }

  tbody tr {
    border: 1px solid var(--darkGrey);
  }
  thead > tr {
    background-color: #f9f9f9;
  }
  caption {
    font-size: 0.9em;
    padding: 5px;
    font-weight: bold;
  }
`;

export default ({ data, titles, remove, edit }: IProps) => (
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
        <tr key={index}>
          <td>{item.categoria}</td>
          <td>{item.nomeProduto}</td>
          <td>{item.nomeFornecedor}</td>
          <td>{item.valor}</td>
          <td>
            <FaTrash onClick={() => remove(item.id)} />
            <FaPen onClick={() => edit(item.id)} />
          </td>
        </tr>
      ))}
    </tbody>
  </StyledTable>
);
