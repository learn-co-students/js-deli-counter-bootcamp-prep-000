
var katzDeli = [];

function takeANumber(line, name){
  var num = line.length + 1;
  line.push(name);
    return `Welcome, ${name}. You are number ${num} in line.`;
}

function currentLine(line){
  if (line.length > 0){
    var result1 = [];
  for (var i=0; i<line.length; i++){
    result1.push(i+1 +". "+line[i]);
  }
  var final = result1.join(", ");
  return "The line is currently: " + final;
  }
   else {
    return "The line is currently empty.";
  }
}

function nowServing(line){
  if (line.length > 0){
    var person = line[0];
    line.shift();
    return "Currently serving " + person + ".";
  }
  else {
    return "There is nobody waiting to be served!";
  }
}

