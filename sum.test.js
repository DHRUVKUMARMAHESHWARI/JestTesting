const { sum, objChecker } = require("./sum");

describe("test related to checking for both sum and obj", () => {
  test("check the sum for every number", () => {
    expect(sum(2, 3)).toEqual(5);
  });
  test("checking the obj", () => {
    expect(objChecker({ name: "Dhruv", age: "21" })).toEqual({
      name: "Dhruv",
      age: "21",
    });
  });
  test("matcher test", () => {
    expect(null).toBeNull();
    expect(undefined).toBeUndefined();
    expect(true).toBeTruthy();
    expect(false).toBeFalsy();
    expect("DhruvKumarmaheshwari").toMatch(/ru/);
    expect([1, 2, 3]).toContain(2);
  });
});
