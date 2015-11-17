
const array = [1,2,3];
filter((item) => item !== 3, array)
// [1, 2]

function filter(predicate, arr) {
  var out = []
  for (var i = 0 ; i < arr.length ; i++) {
    if (predicate(arr[i], i, arr)) {
      out.push(arr[i])
    }
  }
  return out
}

const filter = (predicate, arr) => filter(predicate, array)
