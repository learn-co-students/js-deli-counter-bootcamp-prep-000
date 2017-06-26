var katzDeli = []

function takeANumber (linecount, name) {
    linecount.push(name)
  return linecount, `Welcome, ${name}. You are number ${linecount.length} in line.`
}

takeANumber(katzDeli,"Ada");
takeANumber(katzDeli,"Grace");



function nowServing (linecount) {
  if (linecount.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    return `Currently serving ${linecount.shift(1)}.`
  }
}

function currentLine(linecount) {
  if (linecount.length === 0) {
    return "The line is currently empty."
  }
  const numbersAndNames = []

  for (let i = 0, l = linecount.length; i < l; i++) {
    numbersAndNames.push(`${i + 1}. ${linecount[i]}`)
  }

  return `The line is currently: ${numbersAndNames.join(', ')}`

}

console.log(takeANumber(katzDeli,"Tom"));
console.log(katzDeli);
console.log(nowServing(katzDeli));
console.log(nowServing(katzDeli));
console.log(katzDeli);
console.log(currentLine(katzDeli));
