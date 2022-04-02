import { Title, Wrapper, Button, TomatoButton } from "./styles/styles";

function App() {
  return (
    <>
      <Wrapper>
        <Title>Hello World!</Title>
      </Wrapper>
      <Button>Normal Button</Button>
      <Button primary>Primary</Button>
      {/* <Button secondary>Secondary</Button> */}
      <TomatoButton>TomatoButton</TomatoButton>
    </>
  );
}

export default App;
