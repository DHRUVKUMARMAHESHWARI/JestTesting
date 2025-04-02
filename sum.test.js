const { sum, objChecker, dbConnection } = require("./sum");

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

// Setup and Teardown

describe("Database Operations", () => {
  beforeAll(() => {
    console.log("Setting up database connection...");
  });

  test("DB connection status", () => {
    let dbStatus = dbConnection();
    expect(dbStatus).toBe("DB connection successfull");
  });
  test("DB connection status 2 ", () => {
    let dbStatus = dbConnection();
    expect(dbStatus).toBe("DB connection successfull");
  });
 
   test("DB connection status 3 ", () => {
     let dbStatus = dbConnection();
     expect(dbStatus).toBe("DB connection successfull");
   });
  
  afterAll(() => {
    console.log("database disconnected...");
  });
});
