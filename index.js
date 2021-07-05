var katzDeliLine = [];
var otherDeli = ["Steven", "Blake", "Avi", "Grace"];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(`${name}`);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(deliLine) {
  if (deliLine.length < 1) {
    return "There is nobody waiting to be served!"
  } else {
    var next = deliLine[0];
    deliLine.shift();
  }
  return `Currently serving ${next}.`;
}

function currentLine(line) {
  if (line.length < 1) {
    return "The line is currently empty.";
  } else {
    var theLine = [];
    let n = line.length;
    for (let i = 0; i < n; i++) {
      var num = i + 1;
      var nextName = line[i];
      var total = ` ${num}. ${nextName}`;
      theLine.push(`${total}`);
    }
  }
  return `The line is currently:${theLine}`;
}
