function takeANumber(array, name) {
  array.push(name)
  return "Welcome, " + name + ". You are number "+ array.length +" in line."
};
function nowServing(array) {
  if (array.length < 1) {return "There is nobody waiting to be served!"}
  else {return "Currently serving " + array.shift(0) + "."}
};
function currentLine(array) {
  var a = []
  if (array.length < 1) {return "The line is currently empty."}
  else {for (var x=0; x < array.length; x++) {a.push(" " + (x+1) + ". " + array[x])}}
  return "The line is currently:" + a
};
