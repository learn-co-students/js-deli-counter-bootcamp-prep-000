var katzDeli = [];
function takeANumber(katzDeliLine, newPersonName){
    katzDeliLine.push(newPersonName)
     return ("Welcome, "+ newPersonName+ ". You are number "+ katzDeliLine.length + " in line.")
}
function nowServing(katzDeliLine) {
  if(!katzDeliLine.length) {
    return "There is nobody waiting to be served!"
  } else {
    return "Currently serving " + katzDeliLine.shift()+ ".";
  }
}
function currentLine(katzDeliLine){
  if(!katzDeliLine.length){
    return "The line is currently empty.";
  }
  var numberWithName = [];
  for(var j=0; j<katzDeliLine.length; j++){
    numberWithName.push(j+1 + ". "+ katzDeliLine[j])
  }
  return "The line is currently: "+ numberWithName.join(", ");
}