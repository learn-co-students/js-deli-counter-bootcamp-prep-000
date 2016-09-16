var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeli.push(name)
  katzDeliLine.push(name)
  var number = katzDeliLine.indexOf(name) + 1
  return (`Welcome, ${name}. You are number ${number} in line.`)
}

function nowServing(array) {
  if (array.length !== 0) {
    var name = array[0]
    array.shift()
    return(`Currently serving ${name}.`)
  }
  else {
    return ('There is nobody waiting to be served!')
  }
}

function currentLine(array) {
  var newArray = []
  if (array.length !== 0) {
  for (var i = 0; i < array.length; i++) {
    newArray.push(` ${i + 1}. ${array[i]}`)
  } return ("The line is currently:" + newArray)
}
    else {
      return("The line is currently empty.")
    }
}
