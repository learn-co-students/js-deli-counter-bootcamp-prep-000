var katzDeli = [];

function takeANumber(current_line,new_name){
current_line.push(new_name);
var position = current_line.length;
var sentance = `Welcome, ${new_name}. You are number ${position} in line.`;
return sentance;
}

function nowServing(current_line){
if (current_line.length >= 1) {
  var first_person = current_line.shift();
  return `Currently serving ${first_person}.`;
}
else {
  return "There is nobody waiting to be served!"
}
}

function currentLine(current_line){
  if (current_line.length >= 1) {
    var new_array_order = [];
    for (var i=0; i<current_line.length; i++) {
    var n = i+1
    new_array_order[i] = ` ${n}. ${current_line[i]}`;
  }
    return `The line is currently:${new_array_order}`;
  }
else {
  return "The line is currently empty.";
}
}
