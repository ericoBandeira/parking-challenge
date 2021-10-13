import { render, screen } from "@testing-library/react";
import { MenuBurger } from "./MenuBurger";
import { BrowserRouter as Router } from "react-router-dom";

test("Menu hamburguer aperece", () => {
  global.innerWidth = 500;
  render(
    <Router>
      <MenuBurger />
    </Router>
  );
  expect(screen.getByTitle("Burger"));
});

test("Menu hamburguer aperece", () => {
  global.innerWidth = 1024;
  render(
    <Router>
      <MenuBurger />
    </Router>
  );
  expect(screen.getByTitle("Not Burger"));
});

test("Renderizando os textos Menu corretamente", () => {
  render(
    <Router>
      <MenuBurger />
    </Router>
  );

  expect(screen.getByText("Entrada")).toBeInTheDocument();
  expect(screen.getByText("Saída")).toBeInTheDocument();
});
