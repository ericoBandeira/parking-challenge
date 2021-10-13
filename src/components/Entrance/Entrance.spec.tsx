import { render, screen } from "@testing-library/react";
import { Entrance } from "./Entrance";
import ReactModal from "react-modal";

describe("Página Entrance", () => {
  test("verificar textos", () => {
    render(<Entrance />);

    expect(screen.getByText("Número da placa:")).toBeInTheDocument();
    expect(screen.getByText("Confirmar Entrada")).toBeInTheDocument();
  });
});
