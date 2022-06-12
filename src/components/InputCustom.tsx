import styled from "styled-components";

const InputCustom = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: #c5cdd6;
  background: var(--grey);
  border: 1px solid var(--darkGrey);
  border-radius: 3px;
  &:focus {
    border: 1px solid var(--green);

    box-shadow: 0 0 0 0;
    outline: 0;
  }
  &:hover {
    border: 1px solid var(--green);
  }
`;

export { InputCustom };
