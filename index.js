var katzDeli = [];

function takeANumber(katzDeliLine, string){
  var position = katzDeliLine.length + 1;
  katzDeliLine.push(string);
  return "Welcome, " + string + ". You are number " + position + " in line.";
}

function nowServing(deadline){
  var name = [];
  if (deadline.length === 0){
    return "There is nobody waiting to be served!";
  }

  name = deadline.shift();
  return "Currently serving " + name + ".";

}

function currentLine(line){
  if(line.length === 0){
    return "The line is currently empty."
  }

  var newString = `The line is currently: 1. ${line[0]}`

  for (var i=1; i< line.length; i++){
    newString += `, ${i+1}. ${line[i]}`;
  }
  return newString;
}
