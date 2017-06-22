var katzDeli = []
function takeANumber(katzDeliLine, name){
  katzDeli = katzDeliLine.push(name);
  return "Welcome, "+ name + ". You are number " + katzDeliLine.length  + " in line."
}
function nowServing(katzDeliLine){
  if(katzDeliLine.length === 0){
    return "There is nobody waiting to be served!"
  }
  else {
    return "Currently serving "+  katzDeliLine.shift(0) + ".";
  }
}
function currentLine(katzDeliLine){
  var newarray = ["The line is currently: "]
  if(katzDeliLine.length === 0){
    return "The line is currently empty."
  }
  else {
    for(var i = 0; i < katzDeliLine.length -1; i++){
      newarray[0] = newarray[0] + (i + 1) + ". " + katzDeliLine[i] + ", ";
    }
    newarray[0] = newarray[0] + katzDeliLine.length + ". " + katzDeliLine[katzDeliLine.length-1];
  }
  return newarray[0]
}
