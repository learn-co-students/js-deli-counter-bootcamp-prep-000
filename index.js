var katzDeli = []

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeli) {
  if (katzDeli.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    return `Currently serving ${katzDeli.shift()}.`
}
}

function currentLine(array) {
var people = [];
if (array.length === 0) {
return `The line is currently empty.`
}
    if (array.length > 0) {
for (var i = 0; i < array.length; i++) {
var nameAndNumber = ` ${i + 1}. ${array[i]}`
people.push(nameAndNumber)
}
return `The line is currently:${people}`
    }
}
