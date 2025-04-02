jest.mock('./api');
const apiData = require("./api");
test("fetch user data and return it ", async () => {
  apiData.mockResolvedValue({
    id: 1,
    username: "johnd",
    email: "johnd@gmail.com",
    password: "m38rmF$",
  });

  const user = await apiData();
  expect(user.username).toBe("johnd");
  expect(user.id).toBe(1);
  expect(user.email).toBe("johnd@gmail.com");
  expect(user.password).toBe("m38rmF$");
});


