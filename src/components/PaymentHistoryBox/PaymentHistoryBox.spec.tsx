import { render, screen } from "@testing-library/react";
import { PaymentHistoryBox } from "./PaymentHistoryBox";

describe("Box pago", () => {
  test("Textos de título renderizando", () => {
    render(
      <PaymentHistoryBox
        paid={true}
        time={"hours secondes minutes"}
        onClick={() => {}}
      />
    );

    expect(screen.getByText("Tempo Atual")).toBeInTheDocument();
    expect(screen.getByText("Pagamento")).toBeInTheDocument();
  });

  test("Textos do pagamento renderizando", () => {
    render(
      <PaymentHistoryBox
        paid={true}
        time={"hours secondes minutes"}
        onClick={() => {}}
      />
    );

    expect(screen.getByText("Pago")).toBeInTheDocument();
  });

  test("Textos das horas renderizando", () => {
    render(
      <PaymentHistoryBox
        paid={true}
        time={"hours secondes minutes"}
        onClick={() => {}}
      />
    );

    expect(screen.getByText("hsecondesmin")).toBeInTheDocument();
  });
});

describe("Box não pago", () => {
  test("Textos de título renderizando", () => {
    render(
      <PaymentHistoryBox
        paid={false}
        time={"hours secondes minutes"}
        onClick={() => {}}
      />
    );

    expect(screen.getByText("Tempo Atual")).toBeInTheDocument();
    expect(screen.getByText("Pagamento")).toBeInTheDocument();
  });

  test("Textos do pagamento renderizando", () => {
    render(
      <PaymentHistoryBox
        paid={false}
        time={"hours secondes minutes"}
        onClick={() => {}}
      />
    );

    expect(screen.getByText("—")).toBeInTheDocument();
  });

  test("Textos das horas renderizando com replace", () => {
    render(
      <PaymentHistoryBox
        paid={false}
        time={"hours secondes minutes"}
        onClick={() => {}}
      />
    );

    expect(screen.getByText("hsecondesmin")).toBeInTheDocument();
  });
});
