var katzDeli = []
function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}
function nowServing(line) {
  if (line.length === 0) {
    return `There is nobody waiting to be served!`
  } else {
    return `Currently serving ${line.shift()}.`
  }
}
function currentLine(line) {
  if (line.length === 0) {
    return `The line is currently empty.`
  }
const names = []
let i = 0
for (var b = line.length; i < b; i++)
names.push(`${i + 1}. ${line[i]}`)
return `The line is currently: ${names.join(', ')}`
}
