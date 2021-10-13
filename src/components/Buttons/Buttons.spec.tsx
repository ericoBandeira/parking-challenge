import { render } from "@testing-library/react";
import ReactModal from "react-modal";
import { Buttons } from "./Buttons";

test("botão renderiza corretamente", () => {
  const { getByText } = render(
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

  expect(getByText("Button")).toBeInTheDocument();
});
