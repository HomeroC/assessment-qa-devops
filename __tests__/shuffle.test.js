const shuffle = require("../src/shuffle");

describe("shuffle should...", () => {
  // CODE HERE
  test("Shuffle should return an array.", () => {
    let returnedArr = shuffle()
    expect(Array.isArray(returnedArr)).toBe(true)
  })

  test("Shuffle should return an array of the same length as the argument passed in", () => {
    let newArr = [1, 2, 3, 4, 5]
    let result = shuffle(newArr)

    expect(result.length).toBe(newArr.length)
  })
});
