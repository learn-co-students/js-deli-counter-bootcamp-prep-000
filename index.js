//var katzDeliLine=[1,2,3]

function takeANumber(array, newName) {
  array.push(newName)
  for (var i = 0; i < array.length; i++) {
    if (array[i] == newName) {
      var message = `Welcome, ${array[i]}. You are number ${i+1} in line.`
      return message
    }
  }
}


// console.log(takeANumber(katzDeliLine,2))


function nowServing(array) {
  if (array.length === 0 ) {
    return "There is nobody waiting to be served!"
  } else {
      var number1= array[0]
      array.shift()
      return `Currently serving ${number1}.`
    }
}

function currentLine(array) {
  if (array.length === 0) {
    return "The line is currently empty."
  } else {
    var returnString = 'The line is currently: '
    for (var i = 0; i < array.length; i++) {
      returnString = returnString + `${i + 1}. ${array[i]}, `
    }
    returnString = returnString.slice(0, returnString.length-2)
  }
  return returnString
}
