import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Header } from "./Header";

test("Renderizando os textos Header corretamente", () => {
  render(
    <Router>
      <Header />
    </Router>
  );

  expect(screen.getByText("Entrada")).toBeInTheDocument();
  expect(screen.getByText("Saída")).toBeInTheDocument();
});

test("Renderizando a imagem do Header", () => {
  render(
    <Router>
      <Header />
    </Router>
  );

  expect(screen.getByTitle("Logo"));
});

test("Menu hamburguer aperece", () => {
  global.innerWidth = 500;
  render(
    <Router>
      <Header />
    </Router>
  );
  screen.debug();
  expect(screen.getByTitle("Burger"));
});

test("Menu hamburguer aperece", () => {
  global.innerWidth = 1024;
  render(
    <Router>
      <Header />
    </Router>
  );
  screen.debug();
  expect(screen.getByTitle("Not Burger"));
});
