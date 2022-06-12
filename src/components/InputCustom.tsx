import styled from "styled-components";

const InputCustom = styled.input`
  width: 100%;

  margin: 0.5em 0;
  padding: 0.5em;

  border-radius: 3px;

  color: #c5cdd6;
  background: var(--grey);
  border: 1px solid var(--darkGrey);

  &:focus {
    box-shadow: 0 0 0 0;
    outline: 0;

    border: 1px solid var(--green);
  }
  &:hover {
    border: 1px solid var(--green);
  }
`;

export { InputCustom };
