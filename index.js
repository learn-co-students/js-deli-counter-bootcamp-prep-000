function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line.";
}

function nowServing(katzDeliLine){
  var first = katzDeliLine[0];
  if (first == "" || first == null){
    return "There is nobody waiting to be served!"
  }
  katzDeliLine.shift();
  return "Currently serving " + first + ".";

}

function currentLine(katzDeliLine){
  var line = "The line is currently:";
  if (katzDeliLine.length == 0){
    return "The line is currently empty."
  }
  var length = katzDeliLine.length - 1;

  for(var i = 0; i <= length; i++){
    var current = i + 1;
    if (i == 0){
      line += " " + current + ". " + katzDeliLine[i];
    }else{
      line += ", " + current + ". " + katzDeliLine[i];
    }
  }
  return line;
}
