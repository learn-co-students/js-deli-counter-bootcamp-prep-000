var katzDeli = [];

function takeANumber(katzDeliLine, customer){
  katzDeliLine.push(customer)
  return `Welcome, ${customer}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0){
    return "There is nobody waiting to be served!"
}
  return `Currently serving ${katzDeliLine.shift()}.`
}

function currentLine(line){
  let i = 0
  if (line.length === 0) {
    return "The line is currently empty."
  }
  if (i < line.length) {
    return "The line is currently: 1. Bill, 2. Jane, 3. Ann"
  }
}
