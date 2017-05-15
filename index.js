var katzDeliLine = [];

function takeANumber(array, name) {
  array.push(name)
  return `Welcome, ${name}. You are number ${array.length} in line.`
}


function nowServing(array) {
  if (array.length > 0) {
    var person = array.shift()
    return `Currently serving ${person}.`
  } else {
    return 'There is nobody waiting to be served!'
  }
}

function currentLine(array) {
  if (array.length === 0) {
    return "The line is currently empty."
  }
  var positions = [];
  for(var i=0; i < array.length; i++) {
    positions.push(` ${i+1}. ${array[i]}`)
  }
  return `The line is currently:${positions}`
}
