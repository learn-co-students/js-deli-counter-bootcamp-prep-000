var katzDeliLine = [];

function takeANumber(katzDeliLine, custName) {
  var numCurrentCustomers = katzDeliLine.length;

  katzDeliLine.push(custName);

  return "Welcome, " + custName + ". You are number " + katzDeliLine.length + " in line.";
}

function nowServing(katzDeliLine) {
  var firstPerson = katzDeliLine[0];

  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    katzDeliLine.shift();
    return "Currently serving " + firstPerson + ".";
  }
}

function currentLine(katzDeliLine) {
  var newString = "The line is currently:";

  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  } else {
    for (var i = 0; i < katzDeliLine.length; i++) {
      newString += " " + [i+1] + ". " + katzDeliLine[i] + ",";
    }
  }

  return newString.slice(0, -1);

}
