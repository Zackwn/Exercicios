type FNStep<T> = (data: T) => T

function pipeline<T>(data: T, ...steps: Array<FNStep<T>>) {
  let currentData = data
  for (let index = 0; index < steps.length; index++) {
    currentData = steps[index](currentData)
  }
  return currentData
}

const filterGreaterThanFive = (data: number[]) =>
  data.filter(el => el > 5)

const filterOdds = (data: number[]) =>
  data.filter(el => el % 2 !== 0)

const result = pipeline(
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  filterGreaterThanFive,
  filterOdds
)

console.log(result) // [7, 9]