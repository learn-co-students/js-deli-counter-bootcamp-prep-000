var arr = []

function takeANumber (arr, newCustomer) {
  arr.push(newCustomer)
  return `Welcome, ${newCustomer}. You are number ${arr.length} in line.`
}

function nowServing (arr) {

  if (!arr.length) {
    return 'There is nobody waiting to be served!'
  }

  return `Currently serving ${arr.shift()}.`
}

function currentLine (arr) {

  if (!arr.length) {
    return "The line is currently empty."
  }

  var arrNew = []
  for (var i = 0; i < arr.length; i++) {
    arrNew.push(` ${ i + 1}. ${arr[i]}`)
  }

  return `The line is currently:${arrNew}`
}
