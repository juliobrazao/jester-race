import { ReactNode } from "react";
import Modal from "./components/Modal";
import "../src/App.css";

interface ContainerProps {
  children: ReactNode;
}

function Container({ children }: ContainerProps) {
  return (
    <>
      <div className="container-fluid my-3 text-center">{children}</div>
    </>
  );
}

export default function App() {
  return (
    <>
      <Container>
        <Modal />
      </Container>
    </>
  );
}
