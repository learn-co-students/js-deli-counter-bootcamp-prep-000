//Adds a person to the end of the line
function takeANumber(array, name) {
  array.push(name)
  return "Welcome, " + name + ". You are number " + array.length + " in line."
};
//Serves first person in line. If there is nobody in line, nobody waiting to be served
function nowServing(array) {
  if (array.length < 1) {return "There is nobody waiting to be served!"}
  else {return "Currently serving " + array.shift(0) + "."}
};
//Says who is in line when there are people waiting
function currentLine(array) {
  var a = []
  if (array.length < 1) {return "The line is currently empty."}
  else {for (var x=0; x < array.length; x++) {a.push(" " + (x+1) + ". " + array[x])}}
  return "The line is currently:" + a
};
