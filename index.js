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

function currentLine(katzDeliLine) {
    var line = []
    if (katzDeliLine.length === 0) {
      return "The line is currently empty."
    } else {
      for(var i = 0; i < katzDeliLine.length; i++) {
        line += (i + 1) + ". " + katzDeliLine[i] + ", "
      }
      line = line.slice(0, line.length-2)
      return "The line is currently: " + line
    }
}