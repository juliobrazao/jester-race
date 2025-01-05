import { ContainerCentered, ContainerFluid } from "./components/Container";
import FixtureForm from "./components/FixtureForm";

export default function App() {
  return (
    <>
      <ContainerFluid>
        App
        <ContainerCentered>
          <FixtureForm />
        </ContainerCentered>
      </ContainerFluid>
    </>
  );
}
