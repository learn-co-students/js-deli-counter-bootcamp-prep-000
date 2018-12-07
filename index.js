function takeANumber(deliLine, newPerson) {
  if (deliLine.length > 0);
  deliLine.push(newPerson);
  return ("Welcome, " + newPerson + ". You are number " + deliLine.length + " in line.")
}


function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    return("Currently serving " + katzDeliLine.shift() + "."); 
}
    else {
      return ("There is nobody waiting to be served!")}
}

  
function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return("The line is currently empty.")}
    else {
      var line = ["The line is currently:"]
      for (var i=0; i<katzDeliLine.length; i++){
        line.push("" + (i+1) + ". " + katzDeliLine[i] + ",");
      }
      }
    let lineString = line.join(" ");
    return lineString.substring(0, lineString.length-1);
  }
  
  
  
  
  