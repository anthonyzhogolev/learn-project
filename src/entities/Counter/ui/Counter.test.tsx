import Counter from "./Counter";
import { screen } from "@testing-library/react";
import { componentRender } from "shared/lib/tests/componentRender";
import userEvent from "@testing-library/user-event";

describe("Counter", () => {
  test("should render counter value", () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 0 } },
    });
    expect(screen.getByTestId("counter-title").textContent).toBe("0");
  });
  test("should increment counter value", async () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 0 } },
    });
    await userEvent.click(screen.getByTestId("increment-button"));
    expect(screen.getByTestId("counter-title").textContent).toBe("1");
  });
  test("should decrement counter value", async () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 0 } },
    });
    await userEvent.click(screen.getByTestId("decrement-button"));
    expect(screen.getByTestId("counter-title").textContent).toBe("-1");
  });
});
