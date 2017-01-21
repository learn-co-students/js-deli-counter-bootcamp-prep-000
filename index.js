const katzDeliLine = []

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);

  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(line) {
  if (line.length < 1) {
  return "There is nobody waiting to be served!"
  } else {

    return `Currently serving ${line.shift()}.`
  }
};

function currentLine(line) {
  if (line.length < 1) {
      return "The line is currently empty."
    }
    for (let i = 0, l = line.length; i < l; i++) {
       katzDeliLine.push(`${i + 1}. ${line[i]}`);
    }
    return `The line is currently: ${katzDeliLine.join(', ')}`
};
