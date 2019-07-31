function takeANumber(array, name) {
  array.push(name)
  return "Welcome, " + name + ". You are number "+ array.length +" in line."
};
function nowServing(katzDeliLine) {
  if (katzDeliLine.length < 1) {return "There is nobody waiting to be served!"}
  else {return "Currently serving " + katzDeliLine[0]}
  katzDeliLine.shift()
};
function currentLine(array) {
  var a = []
  if (array.length < 1) {return "The line is currently empty."}
  else {for (var x=0; x < array.length; x++) {a.push(" " + (x+1) + ". " + array[x])}}
  return "The line is currently:" + a
};
