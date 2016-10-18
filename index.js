var katzDeliLine = []

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length > 0) {
  return `Currently serving ${katzDeliLine.shift()}.`
} else {
  return "There is nobody waiting to be served!"
}
}

function currentLine(katzDeliLine) {
  var lineup = "The line is currently: "
  if (katzDeliLine.length > 0) {
    for (var i = 0; i < katzDeliLine.length; i++) {
      lineup += `${i + 1}. ${katzDeliLine[i]}, `
    }
    return lineup.slice(0, -2) //get rid of the ", " from last entry 
  } else {
    return "The line is currently empty."
  }
}
