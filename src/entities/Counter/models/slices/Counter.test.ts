import CounterReducer, { increment, decrement } from "./Counter";

describe("Counter slice", () => {
  test("should handle increment", () => {
    const initialState = { value: 0 };
    const nextState = CounterReducer(initialState, increment());
    expect(nextState.value).toBe(1);
  });
  test("should handle decrement", () => {
    const initialState = { value: 0 };
    const nextState = CounterReducer(initialState, decrement());
    expect(nextState.value).toBe(-1);
  });
});
