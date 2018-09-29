function takeANumber(katzDeli, name) {
  katzDeli.push(`${name}`);
  return(`Welcome, ${name}. You are number ${katzDeli.length} in line.`);
  }

function nowServing(katzDeli) {
  if (katzDeli.length < 1) {
  return("There is nobody waiting to be served!")
} else if (katzDeli.length >= 1) {
  return(`Currently serving ${katzDeli.shift()}.`)
  }
}

function currentLine(line) {
    if (line.length < 1) {
    return("The line is currently empty.")
  } else {
    return(`The line is currently: 1. ${line[0]}, 2. ${line[1]}, 3. ${line[2]}`)
    }
}
