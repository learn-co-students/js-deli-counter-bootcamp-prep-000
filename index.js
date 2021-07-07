var katzDeli = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return "Welcome, "+ name + ". You are number " + katzDeliLine.length + " in line.";
}

function nowServing(line){
  if (line.length > 0){
    return "Currently serving " + line.shift() + ".";
  } else{
    return "There is nobody waiting to be served!";
  }
}

function currentLine(line){
  if (line.length > 0){
    var outputString = "The line is currently: ";
    for (var i = 0; i < line.length-1; i++){
      outputString += (i+1) + ". " + line[i] + ", ";
    }
    outputString += line.length + ". " + line[line.length-1];
    return outputString;
  } else{
    return "The line is currently empty.";
  }
}
