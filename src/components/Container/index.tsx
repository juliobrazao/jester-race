import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

export function Container({ children }: ContainerProps) {
  return <div className="vh-100">{children}</div>;
}

export function ContainerCentered({ children }: ContainerProps) {
  return (
    <Container>
      <div className="position-absolute top-50 start-50 translate-middle d-flex justify-content-center align-items-center">
        {children}
      </div>
    </Container>
  );
}

export function ContainerFluid({ children }: ContainerProps) {
  return (
    <Container>
      <div className="container-fluid text-center mt-5">{children}</div>
    </Container>
  );
}
