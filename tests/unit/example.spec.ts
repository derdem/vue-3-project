function humanreadable(numInput: number) {
  const stringInput = numInput.toString();
  const arrayInput = stringInput.split("");
  const numberOfdigits = arrayInput.length;
  const injectPositions = getInjectPositions(numberOfdigits);
  const arrayWithPoints = injectPoint(arrayInput, injectPositions);
  return arrayWithPoints.join("");
}

function injectPoint(
  arrayNumber: string[],
  injectPositions: number[]
): string[] {
  if (injectPositions.length === 0) {
    return arrayNumber;
  }
  const nextInjectPosition = injectPositions.shift() as number;
  arrayNumber.splice(nextInjectPosition, 0, ".");
  return injectPoint(arrayNumber, injectPositions);
}

function getInjectPositions(arraylength: number) {
  const digitPackage = 3;
  const pointpositions: number[] = [];
  for (let i = digitPackage; arraylength > i; i += digitPackage) {
    pointpositions.push(arraylength - i);
  }
  return pointpositions;
}

describe("suit", () => {
  test("test", () => {
    console.log(humanreadable(1463589357));
  });
});
