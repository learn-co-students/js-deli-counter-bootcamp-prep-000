var katzDeli = [];

function takeANumber (katzDeli, name) {
  katzDeli.push(name);
  return("Welcome, " + name + ". You are number " + katzDeli.length + " in line.");
}


function nowServing (deliLine, name) {
  if (deliLine.length > 0) {
    return("Currently serving " + deliLine.shift(name) + ".");
  }  else {
  return ("There is nobody waiting to be served!");
  }
}


function currentLine (line) {
 if (line.length > 0) {
   var array = [];
   for (let i = 0; i < line.length; i++) {
    array.push(" " + [i + 1] + ". " + line[i]);
   }
   return("The line is currently:" + array);
 } else {
    return("The line is currently empty.");
  }
}