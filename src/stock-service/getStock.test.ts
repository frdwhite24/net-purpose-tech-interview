import { getStock } from "./getStock";

test("returns an empty object", () => {
  expect(getStock()).toStrictEqual({});
});
