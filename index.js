var katzDeli = [] 

function takeANumber(katzDeliLine, newName) {
  katzDeliLine.push(newName)
  katzDeli = katzDeliLine
  return `Welcome, ${newName}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(deliLine) {
  if (deliLine.length === 0) { 
    return "There is nobody waiting to be served!"
  } else {
    return `Currently serving ${deliLine.shift()}.`
  }
}

function currentLine(deliLine) {
  var result = `The line is currently: `
  var adder = ''
  if (deliLine.length === 0) {
    return"The line is currently empty."
  }  else {
    for (var i = 0; i < deliLine.length-1; i++) {
      adder += `${i+1}. ${deliLine[i]}, `
    }
  }
  return result + adder + `${deliLine.length}. ${deliLine[deliLine.length-1]}`
}