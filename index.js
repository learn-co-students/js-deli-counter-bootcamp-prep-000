var katzDeli = [];

function takeANumber(katzDeli, name) {
  katzDeli.push(name)
  return `Welcome, ${name}. You are number ${katzDeli.length} in line.`
}

function nowServing(katzDeli) {
  if (katzDeli.length === 0) {
    return "There is nobody waiting to be served!"
  }
  else {
    return `Currently serving ${katzDeli.shift()}.`
  }
}

/*
For example, if katzDeliLine is currently ["Ada", "Grace"],
currentLine(katzDeliLine) would return
"The line is currently: 1. Ada, 2. Grace".
>>> string + while loop (number + reading the array)
*/

function currentLine(katzDeli) {
  if (katzDeli.length === 0) {
    return `The line is currently empty.`
  }
  else {
    var lineList = []
    for (let i = 0; i < katzDeli.length; i++) {
      lineList.push(" " + parseInt(i+1) + ". " + katzDeli[i])
    }
    return `The line is currently:${lineList}`
  }
}
