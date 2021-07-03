import { sum } from "./sum";

// пример удачного имени 'convert date to user timezone'
it("имя теста (отвечает на вопрос что тестируется - что бы вышло это тестирует что-то/it test smthg", () => {
  expect('вызов функции которую мы проверяем').toBe('')
})

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

describe("test math functions", () => {
  it("test our Sum function", () => {
    expect(sum(1, 2)).toBe(3);
  });

  it("test Max from Math", () => {
    expect(Math.max(2, 1, 5, 3)).toBe(5);
  });
});
