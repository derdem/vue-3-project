import humanreadable from "@/common/scripts/numbers/humanreadable";

describe("Numbers suit", () => {
  test("convert number into humanreadable string", () => {
    expect(humanreadable(1463589357)).toBe("1.463.589.357");
  });
});
