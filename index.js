var katzDeli = []

function takeANumber(katzDeli, name) {
  var position = katzDeli.length+1;
  katzDeli.push(name);
  return("Welcome, " + name + ". You are number "+ position +" in line.")
}

function nowServing(katzDeli) {
  var name;
  if (katzDeli.length == 0){
    return "There is nobody waiting to be served!";
  }
  name = katzDeli.shift();
  return "Currently serving "+ name + ".";
}

function currentLine(katzDeli) {

  if (katzDeli.length == 0){
    return "The line is currently empty.";
  }

  var lineCurrently = "The line is currently: 1. ${katzDeli[0]}";

  for (let i = 1; 1<katzDeli.length; i++){
    lineCurrently += `, ${i+1}. ${katzDeli[i]}`
  }
return lineCurrently;
}
