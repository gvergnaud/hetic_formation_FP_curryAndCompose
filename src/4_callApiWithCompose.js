import { curry, compose } from 'ramda'

// Appliqué au call api

// allAsync :: String -> Promise a
const callAsync = (url) => new Promise((resolve, reject) => {
  $.getJSON(url)
    .done(resolve)
    .error(reject)
})

// then :: (a -> b) -> Promise a -> Promise b
const then = curry((mapper, promise) => promise.then(mapper))

// callApi :: String -> String -> Promise a
const callApi = curry((apiUrl, endPoint) => callAsync(apiUrl + endPoint)

// callGVApi :: String -> Promise a
const callGVApi = callApi('http://gabrielvergnaud.com')

// {a} -> {b}
const formatResponse = response => ({
  title: response.body.title
})

// String -> Promise _
const app = compose(then(console.log), then(formatResponse) callGVApi)

app('/posts');
