var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    return `Currently serving ${katzDeliLine[0]}.`;
    katzDeliLine.shift();
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  } else {
    var sentence = [`The line is currently: ${1}. ${katzDeliLine[0]}`];
    var i = 1;
    while (i < katzDeliLine.length -1) {
      sentence.push(`${i + 1}. ${katzDeliLine[i]} `)
    }
    return sentence.split(", ");
  }
}
