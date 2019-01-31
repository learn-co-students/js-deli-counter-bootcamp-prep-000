var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var announcement = `Currently serving ${katzDeliLine[0]}.`
    katzDeliLine.shift();
    return announcement;
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty."
  } else {
    var NumberPlusCustomer = []
    for (let i = 0; i < line.length; i++) {
      NumberPlusCustomer.push(i+1 + ". " + line[i]);
    }
  }
  return "The line is currently: " + NumberPlusCustomer.join(", ")
}