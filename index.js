var katzDeliLine = [];

function takeANumber(katzDeliLine,customer) {
  katzDeliLine.push(customer);
  return "Welcome, " + customer + ". You are number " + katzDeliLine.length + " in line."
}

function nowServing(katzDeliLine) {
  var front = "There is nobody waiting to be served!";
  if (katzDeliLine.length != 0) {
    front = "Currently serving " + katzDeliLine[0] + ".";
    katzDeliLine.shift();
  }
  return front;
}

function currentLine(katzDeliLine) {
  var theLine = "The line is currently: ";
  if (katzDeliLine.length === 0) {
    theLine = "The line is currently empty.";
  }
  else {
    for (let i = 1; i <= katzDeliLine.length; i++) {
        theLine += i + ". " + katzDeliLine[i-1];
	   if (i < katzDeliLine.length) {
	   	theLine += ', ';
	   }
    }
  }
  return theLine;
}
