var katzDeliLine = [];
var string2 = "";
var i = 0;

function takeANumber(katzDeliLine, name){
  if(katzDeliLine.length > 0)
  katzDeliLine.push(name);
  else{
  katzDeliLine.unshift(name);}
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line.";

}

function nowServing(katzDeliLine){
  if(katzDeliLine.length < 1){
    return "There is nobody waiting to be served!";
  }
  else{
    return "Currently serving " + katzDeliLine.shift() + ".";
  }
}

function currentLine(line){
if (line.length < 1)
{
  return "The line is currently empty."
}
else{

  for (i = 1; i < line.length; i++){
    string2 += ", " + (i+1) + ". " + line[i];
  }
return "The line is currently: 1. " + line[0] + string2;

}
}
