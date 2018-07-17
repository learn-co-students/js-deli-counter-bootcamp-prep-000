var katzDeli = [];

function takeANumber(katzDeli, name ) {
  katzDeli.push(`${name}`);
  return(`Welcome, ${name}. You are number ${katzDeli.length} in line.`);
}

function nowServing(katzDeli) {
  if (!katzDeli.length) {
    return "There is nobody waiting to be served!"
  }
  return `Currently serving ${katzDeli.shift()}.`
}

function currentLine(katzDeli) {
  if (!katzDeli.length) {
    return "The line is currently empty."
  }
  
  var numbersAndNames = []
  
  for (let i = 0, k = katzDeli.length; i < k; i++) {
    numbersAndNames.push(`${i + 1}. ${katzDeli[i]}`)
  }
  
  return `The line is currently: ${numbersAndNames.join(', ')}`
}