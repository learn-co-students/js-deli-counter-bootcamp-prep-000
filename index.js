
var katzDeli = [];
function takeANumber(katzDeliLine, name) {
  var position = katzDeliLine.length+1;
  katzDeliLine.push(name);
  return ("Welcome, " + name + ". You are number " + position + " in line.");
}
function nowServing(deliLine) {
var name;
  if (deliLine.length === 0) {
    return "There is nobody waiting to be served!"
name = deliLine.shift()
return "Currently serving " + name + ".";
  }
}
