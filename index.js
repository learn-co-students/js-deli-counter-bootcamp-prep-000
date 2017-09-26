var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  let i = katzDeliLine.length;
  {return `Welcome, ${name}. You are number ${i} in line.`}
}

function nowServing(katzDeliLine, name) {
  if (katzDeliLine.length > 0) {
  return `Currently serving ${katzDeliLine.shift()}.`
} else {
  return "There is nobody waiting to be served!"}
}

function currentLine(katzDeliLine) {
  if (katzDeliLine == 0) {
    return "The line is currently empty."
  }

  let customer = []
  let line = katzDeliLine.length

 for (let i = 0; i < line; i++)
 {customer.push(`${i+1}. ${katzDeliLine[i]}`)
}
 return `The line is currently: ${customer.join(', ')}`
 }
