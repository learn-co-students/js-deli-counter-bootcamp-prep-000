var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  var yourTurn = katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${yourTurn} in line.`
}

function nowServing(array) {
  if (array.length > 0) {
    var name = array.shift();
    return `Currently serving ${name}.`;
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty.";
  } else {
    var notice = "The line is currently:";
    var order = []
    for (var i = 0; i < line.length; i++) {
      order.push(`${i + 1}. ${line[i]}`);
    }
    return `${notice} ${order.join(", ")}`;
  }
}
