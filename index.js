function takeANumber(line, name){
  line.push(name);
  var humanLine = (line.indexOf(name) + 1);
  return `Welcome, ${name}. You are number ${humanLine} in line.`;
}

function nowServing(line){
let i = 0;
 while (i < line.length) {
  i ++;
 }
 
 if (line.length === 0){
   return "There is nobody waiting to be served!";
 } else
  return (`Currently serving ${line.shift()}.`);
    
}

var newLine = [];
function currentLine(line){
 let i = 0;
 while (i < line.length) {
  newLine = line.push(` ` + [i + 1] + `. ` + line[i] );
   i++;
 }
 
  if (line.length === 0){
    return `The line is currently empty.`;
  }  else {
    return (`The line is currently:` + newLine);
  }
}