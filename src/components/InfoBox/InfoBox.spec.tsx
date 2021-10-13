import { render, screen } from "@testing-library/react";
import { InfoBox } from "./InfoBox";

describe("Informação Negativa", () => {
  test("Renderizando os textos corretamente", () => {
    render(<InfoBox information={false}>Text Info</InfoBox>);

    expect(screen.getByText("Text Info")).toBeInTheDocument();
  });

  test("Renderizando com a cor correta ", () => {
    render(<InfoBox information={false}>Text Info</InfoBox>);

    expect(screen.getByText("Text Info")).toHaveClass("sc-bdfBQB bqmkrP");
  });

  test("Renderizando com o icone correta ", () => {
    render(<InfoBox information={false}>Text Info</InfoBox>);

    expect(screen.getByText("ic_exclamation-mark.svg")).toBeInTheDocument();
  });
});

describe("Informação Afirmativa", () => {
  test("Renderizando os textos Header corretamente", () => {
    render(<InfoBox information={true}>Text Info</InfoBox>);

    expect(screen.getByText("Text Info")).toBeInTheDocument();
  });
  test("Renderizando com a cor correta ", () => {
    render(<InfoBox information={true}>Text Info</InfoBox>);

    expect(screen.getByText("Text Info")).toHaveClass("sc-bdfBQB jvufod");
  });

  test("Renderizando com o icone correta ", () => {
    render(<InfoBox information={true}>Text Info</InfoBox>);

    expect(screen.getByText("ic.svg")).toBeInTheDocument();
  });
});
