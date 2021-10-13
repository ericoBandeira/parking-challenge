import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Header } from "./Header";

test("Renderizando os textos Header corretamente", () => {
  render(
    <Router>
      <Header />
    </Router>
  );

  screen.debug();
  expect(screen.getByText("Entrada")).toBeInTheDocument();
  expect(screen.getByText("Saída")).toBeInTheDocument();
});
