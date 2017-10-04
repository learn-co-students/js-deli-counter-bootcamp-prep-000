
function takeANumber(array, name) {
  var linePosition = array.length + 1;
  array.push(name);
    return "Welcome, " + name + ". You are number " + linePosition + " in line.";
  }

function nowServing(array){
  if (array.length === 0) {
  return "There is nobody waiting to be served!"
} else {
  var name = array.shift()
  return "Currently serving " + name + "."
}
}

function currentLine(array) {
  var i = 0;
  var array2 = [];
 if (array.length === 0){
   return "The line is currently empty."
 } else {
   for (i = 0; i < array.length; i++)
   array2[i] = " " + (i + 1) + ". " + array[i]
    return "The line is currently:" + array2;
 }
}
