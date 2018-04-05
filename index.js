function takeANumber(line, nameofCustomer) {
  line.push(nameofCustomer)
  return `Welcome, ${nameofCustomer}. You are number ${line.length} in line.`
}
function nowServing(line) {
  if (!line.length) {
    return `There is nobody waiting to be served!`
  }
  return `Currently serving ${line.shift()}.`
}
function currentLine(line) {
  if (!line.length) {
    return `The line is currently empty.`
  }
  var NumberandName = []
  for (let i = 0; i < line.length; i++) {
    NumberandName.push(`${i + 1}. ${line[i]}`)
  }
  return `The line is currently: ${NumberandName.join(", ")}`
}
 