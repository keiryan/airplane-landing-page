import "./App.css";
import { Container, LeftHalf, RightHalf } from "./styles.app";
import Form from "./Form/form";

function App() {
  return (
    <Container>
      <LeftHalf></LeftHalf>
      <RightHalf>
        <Form />
      </RightHalf>
    </Container>
  );
}

export default App;
