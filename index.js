var katzDeli = [];

function takeANumber(arr, person) {
  arr.push(person)
  return `Welcome, ${person}. You are number ${arr.length} in line.`
}

function nowServing(a) {
  var served = a[0]
  a.shift()
  return a.length === 0 ? ('There is nobody waiting to be served!') : (`Currently serving ${served}.`)  
}

function currentLine(arr) {
  var newArray = []
  if ( arr.length === 0) {
    return 'The line is currently empty.'
  } for (var i = 0; i < arr.length; i++) {
    newArray.push(` ${i + 1}. ` + arr[i])
  }
      return `The line is currently:${newArray}`
}
