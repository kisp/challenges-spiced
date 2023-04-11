import { add, subtract } from "./index.js";

// using
// https://github.com/dubzzz/fast-check
import * as fc from "fast-check";

const twoArbitraryIntegers = () => fc.tuple(fc.integer(), fc.integer());

const resultIntoANegativeValueOn = (fn) => {
  // return expect(fn(a, b)).toBeLessThan(0);
  return ([a, b]) => {
    expect(fn(a, b)).toBeLessThan(0);
  };
};

const notOfSameAbsValue = ([a, b]) => Math.abs(a) !== Math.abs(b);

const makeNegative = (x) => (x > 0 ? -x : x);
const makePositive = (x) => (x < 0 ? -x : x);

const makeGreaterArgumentNegative = ([a, b]) => {
  if (Math.abs(a) === Math.max(Math.abs(a), Math.abs(b))) {
    return [makeNegative(a), makePositive(b)];
  } else {
    return [makePositive(a), makeNegative(b)];
  }
};

const makeSecondArgumentGreaterThanFirst = ([a, b]) => {
  if (b <= a) {
    return [a, a + 1];
  } else {
    return [a, b];
  }
};

describe("add", () => {
  it("should return 5 for 2 + 3", () => {
    expect(add(2, 3)).toBe(5);
  });

  it("returns a negative value if the greater argument is negative (by example)", () => {
    expect(add(3, -7)).toBeLessThan(0);
  });

  // eslint-disable-next-line jest/expect-expect
  it("returns a negative value if the greater argument is negative (property-based)", () => {
    fc.assert(
      fc.property(
        twoArbitraryIntegers()
          .filter(notOfSameAbsValue)
          .map(makeGreaterArgumentNegative),
        resultIntoANegativeValueOn(add)
      )
    );
  });

  it("returns a value close to 0.3 if called with add(0.1, 0.2)", () => {
    expect(add(0.1, 0.2)).toBeCloseTo(0.3);
  });
});

describe("subtract", () => {
  it("should return 10 for 15 - 5", () => {
    expect(subtract(15, 5)).toBe(10);
  });

  it("returns a negative value if the second argument is greater than the first one (by example)", () => {
    expect(subtract(12, 20)).toBeLessThan(0);
  });

  // eslint-disable-next-line jest/expect-expect
  it("returns a negative value if the second argument is greater than the first one (property-based)", () => {
    fc.assert(
      fc.property(
        twoArbitraryIntegers().map(makeSecondArgumentGreaterThanFirst),
        resultIntoANegativeValueOn(subtract)
      )
    );
  });
});
