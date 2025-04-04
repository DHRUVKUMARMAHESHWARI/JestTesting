const errFunction = require("./errFunction");
test("should test the err related to the function throwing err", () => {
  expect(() => errFunction()).toThrow();
  expect(() => errFunction()).toThrow(Error);
});
