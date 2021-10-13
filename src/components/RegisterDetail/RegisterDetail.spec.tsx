import { render, screen } from "@testing-library/react";
import { RegisterDetail } from "./RegisterDetail";

describe("Box de registro não pago", () => {
  test("Textos de título renderizando", () => {
    render(
      <RegisterDetail paid={false} left={false} time="hours secondes minutes" />
    );

    expect(screen.getByText("Placa")).toBeInTheDocument();
    expect(screen.getByText("Status")).toBeInTheDocument();
    expect(screen.getByText("Estacionado")).toBeInTheDocument();
    expect(screen.getByText("Tempo Atual")).toBeInTheDocument();
    expect(screen.getByText("Pagamento")).toBeInTheDocument();
  });

  test("Textos da label renderizando", () => {
    render(
      <RegisterDetail paid={false} left={false} time="hours secondes minutes" />
    );

    expect(screen.getByText("Estacionado")).toBeInTheDocument();
    expect(screen.getByText("hsecondes min")).toBeInTheDocument();
    expect(screen.getByText("—")).toBeInTheDocument();
  });
});

describe("Box de registro pago", () => {
  test("Textos de título renderizando", () => {
    render(
      <RegisterDetail paid={true} left={false} time="hours secondes minutes" />
    );

    expect(screen.getByText("Placa")).toBeInTheDocument();
    expect(screen.getByText("Status")).toBeInTheDocument();
    expect(screen.getByText("Tempo Atual")).toBeInTheDocument();
    expect(screen.getByText("Pagamento")).toBeInTheDocument();
  });

  test("Textos da label renderizando", () => {
    render(
      <RegisterDetail paid={true} left={false} time="hours secondes minutes" />
    );

    expect(screen.getByText("Estacionado")).toBeInTheDocument();
    expect(screen.getByText("hsecondes min")).toBeInTheDocument();
    expect(screen.getByText("Pago")).toBeInTheDocument();
  });
});

describe("Box de registro pago e liberado", () => {
  test("Textos de título renderizando", () => {
    render(
      <RegisterDetail paid={true} left={true} time="hours secondes minutes" />
    );

    expect(screen.getByText("Placa")).toBeInTheDocument();
    expect(screen.getByText("Status")).toBeInTheDocument();
    expect(screen.getByText("Tempo Atual")).toBeInTheDocument();
    expect(screen.getByText("Pagamento")).toBeInTheDocument();
  });

  test("Textos da label renderizando", () => {
    render(
      <RegisterDetail paid={true} left={true} time="hours secondes minutes" />
    );

    expect(screen.getByText("Liberado")).toBeInTheDocument();
    expect(screen.getByText("hsecondes min")).toBeInTheDocument();
    expect(screen.getByText("Pago")).toBeInTheDocument();
  });
});
