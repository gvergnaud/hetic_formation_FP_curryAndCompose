import { curry } from 'ramda'

// Appliqué au call api

// allAsync :: String -> Promise a
const callAsync = (url) => new Promise((resolve, reject) => {
  $.getJSON(url)
    .done(resolve)
    .error(reject)
})

// callApi :: String -> (a -> a) -> Promise a
const callApi = curry((apiUrl, format, endPoint) =>
  callAsync(apiUrl + endPoint).then((result) =>
    format(result)
  )
)

// String -> Promise a
const callGVApi = callApi('http://gabrielvergnaud.com', result => ({
  title: result.body.title
}))

callGVApi('/aze').then((data) => console.log(data.title))
