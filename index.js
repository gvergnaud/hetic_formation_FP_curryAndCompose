import { map, compose, curry } from 'ramda'
// curry c'est quoi ?
const myFunc = curry((param1, param2, param3) => ({ param1, param2, param3 })

const allan = 'allan'
console.log(myFunc(allan)('moustache')('gabriel'))

// curry retourne un truc comme ça
var myFunc = function(p1) {
  return function(p2) {
    return function(p3) {
      return p1
    }
  }
}

const concatValue = value => map((item, i, array) => item + value)
const concatPaul = concatValue('Paul')
const arr = concatPaul(['Allan'])

console.log(concatPaul(arr))

// Appliqué au call api
const callAsync = (url) => new Promise((resolve, reject) => {
  $.getJSON(url)
    .done(resolve)
    .error(reject)
})

const callApi = curry((apiUrl, format, endPoint) =>
  callAsync(apiUrl + endPoint).then((result) =>
    format(result)
  )
)

const callGVApi = callApi('http://gabrielvergnaud.com', result => ({
  title: result.body.title
}))

// callGVApi('/aze').then((data) => console.log(data.title))

// sub :: Number -> Number -> Number
const sub = curry((val1, val2) => val2 - val1)

// add :: Number -> Number -> Number
const add = curry((val1, val2) => val2 + val1)

// mult :: Number -> Number -> Number
const mult = curry((val1, val2) => val2 * val1)

// createTuple :: Number -> [Number]
const createTuple = value => number => [value, number]

// addAll :: [Number] -> Number
const addAll = arr => arr.reduce((acc, item) => acc + item, 0)

const doMath = compose(addAll, createTuple(123), add(2), sub(5), mult(3))


// Parenthese Cycle.Js
const app = compose(render, model, intent)
Cycle.run(app)
