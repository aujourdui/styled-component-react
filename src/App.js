import {
  StyledCounter,
  ButtonContainer,
  Button,
  Paragraph,
} from "./styles/styles";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <>
      <StyledCounter>
        <Paragraph>{count}</Paragraph>
        <ButtonContainer>
          <Button onClick={increment}>increment</Button>
          <Button base onClick={decrement}>
            decrement
          </Button>
        </ButtonContainer>
      </StyledCounter>
    </>
  );
}

export default App;

// import styled from "styled-components";

// export const Button = styled.button`
//   background: ${(props) => (props.base ? "blue" : "white")};
//   color: ${(props) => (props.base ? "white" : "blue")};
//   ${"" /* color: ${(props) => (props.secondary ? "blue" : "lightgray")}; */}

//   font-size: 1rem;
//   margin: 1rem;
//   padding: 0.25rem 1rem;
//   border: 2px solid blue;
//   border-radius: 3px;
// `;

// function App() {
//   return (
//     <>
//       <Button>Normal</Button>
//       <Button base>Base</Button>
//     </>
//   );
// }

// export default App;

// function App() {
//   return (
//     <>
//       <Wrapper>
//         <Title>Hello World!</Title>
//       </Wrapper>
//       <Button>Normal Button</Button>
//       <Button primary>Primary</Button>
//       {/* <Button secondary>Secondary</Button> */}
//       <TomatoButton>TomatoButton</TomatoButton>
//     </>
//   );
// }

// import styled from "styled-components";

// const Title = styled.h1`
//   font-size: 1.5em;
//   text-align: center;
//   color: blue;
// `;

// function App() {
//   return (
//     <>
//       <Title>Hello World!</Title>
//     </>
//   );
// }

// export default App;
