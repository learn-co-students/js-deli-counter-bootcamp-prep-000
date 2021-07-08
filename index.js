var katzDeliLine = [];

function takeANumber(katzDeliLine, newCustomer) {
  katzDeliLine.push(newCustomer);
  for (let x = 0; x < katzDeliLine.length; x++) {
    var newTicket = "Welcome, " + newCustomer + ". You are number " + (x + 1) +" in line.";
  };
  return newTicket;
};

function nowServing(katzDeliLine) {
  var currentlyServing = "Currently serving " + katzDeliLine.shift() + ".";
  if(katzDeliLine.length === 0){
    return "There is nobody waiting to be served!";
  } else {
  return currentlyServing;
}
};

function currentLine(katzDeliLine) {
  var lineArray = [];
  var lineList = "The line is currently:"
  if (!katzDeliLine.length) {
    return "The line is currently empty.";
  }
  for (let x = 0; x < katzDeliLine.length; x++) {
     lineArray.push(" " + (x + 1) + ". " + katzDeliLine[x]);
  } return lineList + lineArray.join(',');
};
