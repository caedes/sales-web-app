import translation from "./translation.json";

describe("fr-FR translation", () => {
  test("writes all translations", () => {
    expect(translation).toMatchSnapshot();
  });
});
