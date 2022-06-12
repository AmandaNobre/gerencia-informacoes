import styled from "styled-components";

const ButtonCustom = styled.button`
  width: ${(props) => (props.theme === "primary" ? "11rem;" : "1rem")};

  margin: 0.2rem 1rem 0 0;
  padding: 0.5rem 0;

  border-radius: 30px;
  border: none;

  background: ${(props) =>
    props.theme === "primary" ? "var(--green)" : "none"};

  color: var(--black);
`;

export { ButtonCustom };
