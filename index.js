function takeANumber(lineArray, customer){
  lineArray.push(customer)
  return `Welcome, ${customer}. You are number ${lineArray.length} in line.`
}


function nowServing(lineArray) {
  if (lineArray.length === 0){
    return "There is nobody waiting to be served!"
  }
  else {
    var served = lineArray.shift()
  }
  return `Currently serving ${served}.`
}

function currentLine(lineArray){
  var toReturn = "The line is currently: "
  if (lineArray.length === 0) {
    return "The line is currently empty."
  }
  else {
    var i = 0
    for (i; i < lineArray.length - 1; i++){
      toReturn += `${i + 1}. ${lineArray[i]}, `
    }
    toReturn += `${i + 1}. ${lineArray[i]}`
    return toReturn
  }
}