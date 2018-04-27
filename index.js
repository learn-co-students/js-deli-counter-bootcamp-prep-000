function takeANumber(line, name){
  line.push(name);
  var position = line.length;
  return "Welcome, " + name + ". You are number " + position + " in line.";
} 

function nowServing(line){
  if (line.length === 0) {
    return "There is nobody waiting to be served!";
  }
  else {
    //access index 0 (first person in line) and remove it. 
    var person = line[0]
    line.shift()
  }
  return "Currently serving " + person + ".";
}

function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty.";
  }
  else {
    var newLine = [];
    line.forEach(function(customer, index) {
    var position = index + 1;
    newLine.push(" "+ position + ". " + customer);
     });
  }
  return "The line is currently:" + newLine;
}