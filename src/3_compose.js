import { compose, curry } from 'ramda'

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

// doMath :: Number -> Number
const doMath = compose(addAll, createTuple(10), add(2), sub(5), mult(3))

console.log(doMath(5));
// <- 22

// À noter que la signature de type de doMath est la somme de toutes les
// signatures des fonctions qui la compose, en allant de droite à gauche:

//    Number -> Number -> Number -> Number -> [Number] -> Number

// ce qui revient à écrire :

//    Number -> Number



// Parenthese sur Cycle.Js
// const app = compose(render, model, intent)
// Cycle.run(app)
