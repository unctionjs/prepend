
import prepend from "./index";

test("works", () => {
  expect(prepend("a")(["b"])).toEqual(["a", "b"]);
});

test("works", () => {
  expect(prepend("a")("bc")).toEqual("abc");
});

test("works", () => {
  expect(() => prepend("c")({})).toThrow();
});
