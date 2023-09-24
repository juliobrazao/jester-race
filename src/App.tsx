import "../src/App.css";
import { ReactNode } from "react";
import Navbar from "./components/Navbar/Navbar";
import Modal from "./components/Modal/Modal";

interface ContainerProps {
  children: ReactNode;
}

function Container({ children }: ContainerProps) {
  return (
    <>
      <div
        className="container-fluid d-flex justify-content-center align-items-center"
        style={{ height: "80vh" }}
      >
        {children}
      </div>
    </>
  );
}

export default function App() {
  return (
    <>
      <Navbar title="System" />
      <Container>
        <Modal />
      </Container>
    </>
  );
}
