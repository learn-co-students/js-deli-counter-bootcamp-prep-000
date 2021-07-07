function takeANumber(line,name){
  line.push(name);
  var num = line.indexOf(name)+1;
  return "Welcome, " + name + ". You are number " + num + " in line."
}

function nowServing(line){
  if (line.length === 0) {
    return "There is nobody waiting to be served!";
  }else{
  for (var i = 0; i < line.length; i++) {
  var first = line.shift();
  return "Currently serving " + first + ".";
}
}
}

function currentLine(line){
if (line.length === 0) {
return "The line is currently empty."
}
var customerAndName = [];
for (var i = 0; i < line.length; i++) {
  customerAndName.push(i+1+". "+line[i])
}
return "The line is currently: "+customerAndName.join(", ")
}
