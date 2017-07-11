var katzDeli = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line.";
}

function nowServing(katzDeliLine) {
  if(katzDeliLine.length > 0){
    var x = katzDeliLine.shift();
    return "Currently serving " + x + "."
  } else {
    return "There is nobody waiting to be served!"
  }
}
function currentLine(katzDeliLine) {
  if(katzDeliLine.length > 0){
    var arr = [];
    for(var i = 0; i < katzDeliLine.length; i++){
      arr.push(" "+ (i+1) + ". " + katzDeliLine[i]);
    } return "The line is currently:" + arr.toString();
  } else {
    return "The line is currently empty.";
  }
}
