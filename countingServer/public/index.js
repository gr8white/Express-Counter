function increment() {
  var counterContainer = document.getElementById('counterContainer')

  axios.get('/api/increment').then(function (response) {
    console.log(response.data)
    var counterValue = response.data
    counterContainer.innerHTML = counterValue
  })
}

function decrement() {
  var counterContainer = document.getElementById('counterContainer')

  axios.get('/api/decrement').then(function (response) {
    console.log(response.data)
    var counterValue = response.data
    counterContainer.innerHTML = counterValue
  })
}

function reset() {
  var counterContainer = document.getElementById('counterContainer')

  axios.get('/api/reset').then(function (response) {
    console.log(response.data)
    var counterValue = response.data
    counterContainer.innerHTML = counterValue
  })
}