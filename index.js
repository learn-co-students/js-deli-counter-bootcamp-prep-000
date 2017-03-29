var katzDeli = [];

// adds new customer to end of deli line and tells them their number in line
function takeANumber(katzDeliLine, customerName) {
  katzDeliLine.push(customerName);
  return `Welcome, ${customerName}. You are number ${katzDeliLine.length} in line.`
}

// finds the next person in line and removes them from the line
function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var nextUp = katzDeliLine.shift();
    return `Currently serving ${nextUp}.`
  }
  // if the line is empty, announces that the line is empty
  else {
    return "There is nobody waiting to be served!"
  }
  return katzDeliLine
}

// returns the current line list with nice, readable formatting
function currentLine(katzDeliLine) {
  // create a new nice list that will eventually mirror (nicely) what's in the master list
  var niceLineList = [];
  // only creates nice list if there is anyone on the list
  if (katzDeliLine.length > 0) {
    // iterates through the master list and adds nicely formatted line positions and customer names to new nice list
    for (var n = 0; n < katzDeliLine.length; n++) {
      niceLineList[n] = ` ${n + 1}. ${katzDeliLine[n]}`
    };
    return `The line is currently:${niceLineList}`
  }
  else{
    return "The line is currently empty."
  }
}
