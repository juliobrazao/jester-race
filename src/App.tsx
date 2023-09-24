import "../src/App.css";
import { ReactNode, createContext, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Modal from "./components/Modal/Modal";

interface ContainerProps {
  children: ReactNode;
}

export const AppContext = createContext<any>(false);

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
  const [navbarTitle, setNavbarTitle] = useState<boolean>(false);

  return (
    <>
      <AppContext.Provider value={[navbarTitle, setNavbarTitle]}>
        <Navbar title={`System - ${navbarTitle ? "Logged" : "Not Logged"}`} />
        <Container>
          <Modal />
        </Container>
      </AppContext.Provider>
    </>
  );
}
