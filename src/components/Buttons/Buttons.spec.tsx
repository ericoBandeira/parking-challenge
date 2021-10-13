import { render, screen } from "@testing-library/react";
import ReactModal from "react-modal";
import { Buttons } from "./Buttons";

describe("Disabled Buttons", () => {
  test("Texto do botão renderiza corretamente", () => {
    render(
      <Buttons
        purple={false}
        outline={false}
        disabled={true}
        onClick={() => {
          ReactModal.setAppElement("#root");
        }}
      >
        Button
      </Buttons>
    );
    expect(screen.getByText("Button")).toBeInTheDocument();
    expect(screen.getByText("Button")).toBeDisabled();
  });

  test("Botão outline renderiza corretamente", () => {
    render(
      <Buttons
        purple={true}
        disabled={true}
        outline={true}
        onClick={() => {
          ReactModal.setAppElement("#root");
        }}
      >
        Button
      </Buttons>
    );
    expect(screen.getByText("Button")).toHaveClass("sc-bdfBQB ePhZCH");
    expect(screen.getByText("Button")).toBeDisabled();
  });

  test("Botão purple|green renderiza corretamente", () => {
    render(
      <Buttons
        purple={true}
        disabled={true}
        outline={false}
        onClick={() => {
          ReactModal.setAppElement("#root");
        }}
      >
        Button
      </Buttons>
    );
    expect(screen.getByText("Button")).toHaveClass("sc-bdfBQB VEjep");
    expect(screen.getByText("Button")).toBeDisabled();
  });
});

describe("Normal Buttons", () => {
  test("Texto do botão renderiza corretamente", () => {
    render(
      <Buttons
        purple={false}
        outline={false}
        disabled={false}
        onClick={() => {
          ReactModal.setAppElement("#root");
        }}
      >
        Button
      </Buttons>
    );
    expect(screen.getByText("Button")).toBeInTheDocument();
  });

  test("Botão outline renderiza corretamente", () => {
    render(
      <Buttons
        purple={true}
        disabled={false}
        outline={true}
        onClick={() => {
          ReactModal.setAppElement("#root");
        }}
      >
        Button
      </Buttons>
    );
    expect(screen.getByText("Button")).toHaveClass("sc-bdfBQB fqInza");
  });

  test("Botão purple renderiza corretamente", () => {
    render(
      <Buttons
        purple={true}
        disabled={false}
        outline={false}
        onClick={() => {
          ReactModal.setAppElement("#root");
        }}
      >
        Button
      </Buttons>
    );
    expect(screen.getByText("Button")).toHaveClass("sc-bdfBQB elRzQl");
  });

  test("Botão green renderiza corretamente", () => {
    render(
      <Buttons
        purple={false}
        disabled={false}
        outline={false}
        onClick={() => {
          ReactModal.setAppElement("#root");
        }}
      >
        Button
      </Buttons>
    );
    expect(screen.getByText("Button")).toHaveClass("sc-bdfBQB ggsjWy");
  });
});
