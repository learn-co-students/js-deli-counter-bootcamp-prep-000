function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing (line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!";
  }

  var person = line.shift();
  return `Currently serving ${person}.`;
}

function currentLine(katzDeliLine){
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  }

  var customers = [];
  for (var i = 0; i < katzDeliLine.length; i++) {
    var id = i + 1;
    customers.push(`${id}. ${katzDeliLine[i]}`);
  }

  var result = customers.join(', ');
  return `The line is currently: ${result}`;
}
