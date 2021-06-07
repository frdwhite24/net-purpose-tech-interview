import { getSecurity } from "./getSecurity";

test("returns an empty object", () => {
  expect(getSecurity()).toStrictEqual({});
});
