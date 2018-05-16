function takeANumber(katzDeliLine, customer) {
    katzDeliLine.push(customer);
    var hungryforsandwich = katzDeliLine.indexOf(customer) + 1;
    return "Welcome, " + customer + ". You are number " + hungryforsandwich + " in line.";
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length < 1) {
      return "There is nobody waiting to be served!";
  }
  for (var i in katzDeliLine) {
    if (i >= 0) {
      var orderup = katzDeliLine.shift();
      return "Currently serving " + orderup + ".";
    }
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length < 1) {
    return "The line is currently empty.";
  }
  var newline = [];
  for (var i in katzDeliLine) {
  newline.push(`${parseInt(i) + 1}. ${katzDeliLine[i]}`);
  }
  return `The line is currently: ${newline.join(", ")}`;
}