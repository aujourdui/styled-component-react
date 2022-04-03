import styled from "styled-components";

export const StyledCounter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ButtonContainer = styled.div`
  display: flex;
`;

export const Paragraph = styled.p`
  font-size: 2rem;
  color: orange;
`;

export const Button = styled.button`
  background: ${(props) => (props.base ? "blue" : "white")};
  color: ${(props) => (props.base ? "white" : "blue")};

  font-size: 1rem;
  margin: 1rem;
  padding: 0.25rem 1rem;
  border: 2px solid blue;
  border-radius: 3px;
`;
