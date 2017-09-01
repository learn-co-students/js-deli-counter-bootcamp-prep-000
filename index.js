
const katzDeli = [];

function takeANumber(katzDeliLine, customerName) {
  katzDeliLine.push(customerName);
  let number = katzDeliLine.indexOf(customerName) + 1
  return `Welcome, ${customerName}. You are number ${number} in line.`
}


function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0){
  return `Currently serving ${katzDeliLine.shift()}.`
  } else {
  return "There is nobody waiting to be served!"
}
}


function currentLine(katzDeliLine) {
if (katzDeliLine.length == 0) {
  return "The line is currently empty."
} else {
  for (let i = 0; i < katzDeliLine.length; i++) {
    katzDeli.push(` ${i + 1}. ${katzDeliLine[i]}`)
  }
}
return `The line is currently:${katzDeli}`
}
