function takeANumber(number, name) {
  number.push(name);
  return `Welcome, ${name}. You are number ${number.length} in line.`
}
function nowServing(number) {
  if (number.length === 0) {
    return "There is nobody waiting to be served!"
 }
 return `Currently serving ${number.shift()}.`
}
function currentLine(number) {
  if (number.length === 0) {
    return "The line is currently empty."
  }
  const numbersAndNames = []

  for (let i = 0, l = number.length; i < l; i++) {
    numbersAndNames.push(`${i + 1}. ${number[i]}`)
 }

  return `The line is currently: ${numbersAndNames.join(', ')}`
}