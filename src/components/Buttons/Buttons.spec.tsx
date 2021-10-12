import { render } from "@testing-library/react";
import { Buttons } from "./Buttons";

test("buttons really click and do your functions", () => {
  const { debug } = render(
    <Buttons purple={false} outline={false} disabled={false} onClick={() => {}}>
      Button
    </Buttons>
  );

  debug();
});
