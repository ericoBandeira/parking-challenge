import { render, screen } from "@testing-library/react";
import { PlateInput } from "./PlateInput";

describe("Input Vazio", () => {
  test("Textos de título renderizando", () => {
    render(
      <PlateInput
        plateError={false}
        entracePlate={""}
        setEntrancePlate={() => true}
        setExclamation={() => true}
      />
    );

    expect(screen.getByText("Número da placa:"));
  });

  test("Textos de placeholder renderizando", () => {
    render(
      <PlateInput
        plateError={false}
        entracePlate={""}
        setEntrancePlate={() => true}
        setExclamation={() => true}
      />
    );

    expect(screen.getByPlaceholderText("AAA-0000"));
  });
});

describe("Input Com Placa Certo", () => {
  test("Value do input renderizando", () => {
    render(
      <PlateInput
        plateError={false}
        entracePlate={"AAA-0000"}
        setEntrancePlate={() => true}
        setExclamation={() => true}
      />
    );

    expect(screen.getByDisplayValue("AAA-0000"));
  });

  test("Value do input renderizando com style correto", () => {
    render(
      <PlateInput
        plateError={false}
        entracePlate={"AAA-0000"}
        setEntrancePlate={() => true}
        setExclamation={() => true}
      />
    );

    expect(
      screen
        .getByDisplayValue("AAA-0000")
        .getElementsByClassName("sc-gsTEea fsJBa")
    );
  });
});

describe("Input Com Placa Errada", () => {
  test("Textos de value renderizando", () => {
    render(
      <PlateInput
        plateError={true}
        entracePlate={"AAA-000A"}
        setEntrancePlate={() => true}
        setExclamation={() => true}
      />
    );

    expect(screen.getByDisplayValue("AAA-000A"));
  });

  test("Value do input renderizando com style correto", () => {
    render(
      <PlateInput
        plateError={false}
        entracePlate={"AAA-000A"}
        setEntrancePlate={() => true}
        setExclamation={() => true}
      />
    );

    expect(
      screen
        .getByDisplayValue("AAA-000A")
        .getElementsByClassName("sc-gsTEea fsJBa")
    );
  });
});
