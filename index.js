function takeANumber(katzDeliLine, newName) {
  katzDeliLine.push(newName)
  let number = katzDeliLine.indexOf(newName) + 1
  let greeting = `Welcome, ${newName}. You are number ${number} in line.`
  return greeting
}
/*
function nowServing(katzDeliLine) {
if (katzDeliLine.length === 0) {
  return "There is nobody waiting to be served!"
} else {
  return `Currently serving ${katzDeliLine[0]}.`
  katzDeliLine.shift()
}
}
*/

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0){
  return `Currently serving ${katzDeliLine.shift()}.`
  } else {
  return "There is nobody waiting to be served!"
}
}

function currentLine(katzDeliLine) {
var line = []
if (katzDeliLine.length == 0) {
  return "The line is currently empty."
} else {
  for (let i = 0; i < katzDeliLine.length; i++) {
    line.push(` ${i + 1}. ${katzDeliLine[i]}`)
  }
}
return `The line is currently:${line}`
}
