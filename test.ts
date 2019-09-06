
import prepend from "./index";

test(() => {
  expect(prepend("a")(["b"])).toEqual(["a", "b"]);
});

test(() => {
  expect(prepend("a")("bc")).toEqual("abc");
});

test(() => {
  expect(() => prepend("c")({})).toThrow();
});
