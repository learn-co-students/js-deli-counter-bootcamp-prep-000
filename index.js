var katzDeli = [];
function takeANumber(array, person) {
  array.push(person);
  return "Welcome, " + person + ". You are number " + array.length + " in line.";
}

function nowServing (array) {
  {if (array.length === 0)
  return "There is nobody waiting to be served!";
  else
  var i = "Currently serving " + array[0] + ".";
  array.shift();
  return i
  }
}

function currentLine (array) {
   var line = [];
  if (array.length == 0)
  return "The line is currently empty.";
  else
  var i = 0;
  while (i < array.length) {
   if (i === 0)
  line.push((i + 1) + ". " + array[i])
  else
  line.push(" " + (i+ 1) + ". " + array[i]);
  i++;
 }
 return "The line is currently: " + line;
}
