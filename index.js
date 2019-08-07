//adds a person to the line & appends the person the end of the line if there are already people on it
function takeANumber(array, name) {
  array.push(name)
  return "Welcome, " + name + ". You are number " + array.length + " in line."
};
//return the first person in line and then remove that individual from the line.
//If there is nobody in line, it should return "There is nobody waiting to be served!"
function nowServing(array) {
  if (array.length < 1) {return "There is nobody waiting to be served!"}
  else {return "Currently serving " + array.shift(0) + "."}
};
//says who is in line when there are people waiting
function currentLine(array) {
  var a = []
  if (array.length < 1) {return "The line is currently empty."}
  else {for (var x=0; x < array.length; x++) {a.push(" " + (x+1) + ". " + array[x])}}
  return "The line is currently:" + a
};
