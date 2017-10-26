var katzDeliLine = [];

function takeANumber(katzDeliLine, newName) {
  katzDeliLine.push(newName);
  return `Welcome, ${newName}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length <= 0) {
    return "There is nobody waiting to be served!";
  } else {
    var firstPerson = katzDeliLine.shift();
    return `Currently serving ${firstPerson}.`;
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  } else {
    var string = "The line is currently:";
    for (var i = 0, n = katzDeliLine.length; i < n; i++) {
      var turn = i + 1;
      if (i != katzDeliLine.length - 1) {
        string += ` ${turn}. ${katzDeliLine[i]},`
      } else {
        string += ` ${turn}. ${katzDeliLine[i]}`
      }
    }
    return string;
  }
}
