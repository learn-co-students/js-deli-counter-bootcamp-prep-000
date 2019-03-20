
function takeANumber(line, newCustomer) {
    line.push(newCustomer)
    let congra = `Welcome, ${newCustomer}. You are number ${line.length} in line.`
     return congra;
}
takeANumber();



function nowServing(katzDeliLine) {
  if (  katzDeliLine.length === 0) {
    return `There is nobody waiting to be served!`
} else {
    return `Currently serving ${katzDeliLine.shift()}.`
}
}


function currentLine(array) {
  if (array.length === 0) {
    return `The line is currently empty.`
  } else {
    return `The line is currently: 1. ${array[0]}, 2. ${array[1]}, 3. ${array[2]}`
  }
}