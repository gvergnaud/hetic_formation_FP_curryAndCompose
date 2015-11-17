// Imperative
const filter = (predicate, arr) => {
  let out = []
  for (let i = 0 ; i < arr.length ; i++) {
    if (predicate(arr[i], i, arr)) {
      out.push(arr[i])
    }
  }
  return out
}

// Declarative
const filter = (predicate, arr) => array.filter(predicate)

const array = [1,2,3];
filter((item) => item !== 3, array)
// [1, 2]
