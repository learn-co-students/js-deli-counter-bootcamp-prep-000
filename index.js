function takeANumber(katsDeliLine, name){
   katsDeliLine.push(name);
 return "Welcome, "  + name + ". You are number " + katsDeliLine.length + " in line."
 }
 
 function nowServing (katsDeliLine) {
if (katsDeliLine.length > 0) {
  return ("Currently serving " + katsDeliLine.shift() +".")
}
else {
  return ("There is nobody waiting to be served!") 
}
}

function currentLine (katsDeliLine) {
if (katsDeliLine.length > 0) {
var n = 1; 
for (var i = 0; i < katsDeliLine.length; i++, n++) {
  katsDeliLine[i]=` ${n}. ${katsDeliLine[i]}`; 
}
return `The line is currently:${katsDeliLine}`}
else {
return `The line is currently empty.`}
}

  /*
  .push("The line is currently:" + katsDeliLine[*how to get position in array here?*] + ". " + katsDeliLine[i] + ", ");
return empty}
else {
  return "The line is currently empty."
}
}

/*
 function currentLine (katsDeliLine) {
if (katsDeliLine.length > 0)
  {
  var currentLine = [];
for (var i = 0; i < katsDeliLine.length; i++)
  currentLine.push("The line is currently:" + katsDeliLine[*how to get position in array here?*] + ". " + katsDeliLine[i] + ", ");
return empty}
else {
  return "The line is currently empty."
}
}
*/