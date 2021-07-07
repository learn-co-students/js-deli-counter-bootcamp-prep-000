var katzDeli = [];
function takeANumber(katzDeli, name) {
  var order = katzDeli.length + 1;
  katzDeli.push(name);
  return ("Welcome, " + name + ". You are number " + order + " in line.");
}
function nowServing(katzDeli) {
  var place = katzDeli.length;
  if (place >= 1) {
   return("Currently serving " + katzDeli.shift() + ".");
  }
  else {
    return("There is nobody waiting to be served!");
  }
}
function currentLine(katzDeli) {
  var line = katzDeli.length;
  var i;
  for (i = 0; i <= line; i++)
  if (line > i) {
    return("The line is currently: " +(i + 1) + ". " + katzDeli[i] + ", 2. " + katzDeli[i+1] + ", 3. " + katzDeli[i+2]);
  }
  else {
    return("The line is currently empty.");
  }
}