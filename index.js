function takeANumber(line, name) {
  line.push(name);
  return (`Welcome, ${name}. You are number ${line.length} in line.`);
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
  var person = katzDeliLine.shift();
  return `Currently serving ${person}.`
} else {
  return "There is nobody waiting to be served!";
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length > 0) {
var message = "The line is currently: "
  for (let i = 0; i < katzDeliLine.length; i++) {
    message += `${i + 1}. ${katzDeliLine[i]}, `
  }
  return message.slice(0, -2)
} else {
  return "The line is currently empty."
}
}