let katzDeliLine = [];

function takeANumber(katzDeliLine, newCustomer){
  let placeInLine = katzDeliLine.length + 1;
  let welcomeMessage = "Welcome, " + newCustomer + ". You are number " + placeInLine + " in line."; 
  katzDeliLine.push(newCustomer);
  return welcomeMessage;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) 
  return 'There is nobody waiting to be served!'
  
  else {
  let currentlyServing = katzDeliLine[0];
  katzDeliLine.splice(0, 1);
  return "Currently serving " + currentlyServing + ".";
  }
}

function currentLine(katzDeliLine){
  if (katzDeliLine === 0)
  return "The line is currently empty."
  else {
    return katzDeliLine
  }
}