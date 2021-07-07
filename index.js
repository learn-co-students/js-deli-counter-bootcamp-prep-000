function takeANumber(line,name){
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}
function nowServing(line,name){
  for (let i = 0; i < line.length; i++){
  return `Currently serving ${line.shift(name)}.`
  }
  return "There is nobody waiting to be served!"
}
function currentLine(line, name){
if (line.length === 0){ 
  return "The line is currently empty."
}
var lineNow = [];
for(var i=0; i < line.length; i++) {
    lineNow.push(i+1 + ". "+ line[i]);
  }
  return "The line is currently: " + lineNow.join(', ');
}
