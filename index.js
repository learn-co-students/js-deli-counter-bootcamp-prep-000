var katzDeliLine = []

function takeANumber(array, name) {
  //use array length and add 1 to give the new person their number in the line!
  var watingPosition = array.length + 1
  array.push(name)
  return "Welcome, " + name + ". You are number " + watingPosition + " in line."
}

function nowServing(array) {
  if (array.length > 0) {
    return "Currently serving " + array.shift() + "."
  } else return "There is nobody waiting to be served!"
}

function currentLine(array) {
  var waitingLine = []

  for (var i = 0; i < array.length; i++) {
    waitingLine.push( " " + [i+1] + ". " +  array[i])
  }
  if (array.length < 1) {
    return "The line is currently empty."
  } else {
    return "The line is currently:" + waitingLine
  }
}
