var katzDeliLine = [];
function takeANumber(line,name) {
  line.push(name);
  var position = line.length;
  var msg = "Welcome, " + name +"." + " You are number " + position + " in line.";
  return msg;
}

function nowServing(list) {
  var msg = "There is nobody waiting to be served!"
  if (list.length===0) {
    return msg;
  }
  else {
    msg = "Currently serving " + list[0] +".";
    list.shift();
    return msg;
  }
}

function currentLine(list) {
if (list.length===0) {
  return "The line is currently empty.";
}
else {
var msg = "The line is currently: ";
for (var i = 0; i<list.length-1; i++)  {
  var position = i+1;
  msg = msg + position + ". " + list[i] + ", ";
}
++position;
msg = msg + position + ". " + list[position-1];
return msg;
}
}