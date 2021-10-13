import { render, screen } from "@testing-library/react";
import { RightMenu } from "./RightMenu";
import { BrowserRouter as Router } from "react-router-dom";

test("Menu Direito render de textos", () => {
  render(
    <Router>
      <RightMenu open={true} setOpen={() => false} />
    </Router>
  );

  expect(screen.getByText("Entrada")).toBeInTheDocument();
  expect(screen.getByText("Saída")).toBeInTheDocument();
});

test("Menu Direito aberto", () => {
  render(
    <Router>
      <RightMenu open={true} setOpen={() => false} />
    </Router>
  );

  expect(screen.getByText("Entrada")).toBeInTheDocument();
  expect(screen.getByText("Saída")).toBeInTheDocument();
});

test("Menu Direito fechado", () => {
  render(
    <Router>
      <RightMenu open={false} setOpen={() => true} />
    </Router>
  );

  expect(screen.getByText("Entrada")).toBeInTheDocument();
  expect(screen.getByText("Saída")).toBeInTheDocument();
});
