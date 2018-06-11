var katzDeliLine = [];

function takeANumber(katzDeliLine,name){
  katzDeliLine.push(name);
  return "Welcome, "+name+". You are number " +katzDeliLine.length+ " in line.";  
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
     return "There is nobody waiting to be served!";
  }
  else {
    var temp= katzDeliLine.shift();
    return "Currently serving " +temp+".";
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  }
  else {
    var temp = [];
    for (var i=1; i <= katzDeliLine.length; i++) {
      temp[i-1] =" " +i+". " +katzDeliLine[i-1];
    }
    return "The line is currently:" +temp;
  }
}