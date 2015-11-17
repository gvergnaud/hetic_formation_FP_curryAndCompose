import { curry, map } from 'ramda'

// curry c'est quoi ?

// myFunc :: a -> b -> c -> { a, b, c }
const myFunc = curry((param1, param2, param3) => ({ param1, param2, param3 })

// curry transforme notre fonction en ceci

// myFunc :: a -> b -> c -> { a, b, c }
var myFunc = function(param1) {
  return function(param2) {
    return function(param3) {
      return { param1, param2, param3 }
    }
  }
}
// (block du dessus à commenter pour run le script)

const allan = 'allan'
console.log(myFunc(allan)('moustache')('gabriel'))
// <- { param1: 'allan', param2: 'moustache', param3: 'gabriel' }


// sur la librairie Ramda, map est curryé par défault, on peut donc lui passer
// les params en différé

// concatValue :: a -> [b] -> [c]
const concatValue = value => map((item, i, array) => item + value)

// concatPaul :: [a] -> [String]
const concatPaul = concatValue('Paul')

const arr = concatPaul(['Allan'])
console.log(concatPaul(arr))
// ['Allan', 'Paul', 'Paul']
