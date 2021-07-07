var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
katzDeliLine.push(name);
return `Welcome, ${name}. You are number ${katzDeliLine.indexOf(name) + 1} in line.`;

}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
  return `Currently serving ${katzDeliLine.shift()}.`;
} else {
  return "There is nobody waiting to be served!";
  }

}

function currentLine(katzDeliLine) {
var list = "The line is currently:"
  if (katzDeliLine == 0) {
    return "The line is currently empty.";
    } else {
  }
  for (var i = 0; i < katzDeliLine.length; i++) {
    if (list === "The line is currently:") {
      list += ` ${i + 1}. ${katzDeliLine[i]}`;
    } else {
      list += `, ${i + 1}. ${katzDeliLine[i]}`;
    }
    }
    return list
}
