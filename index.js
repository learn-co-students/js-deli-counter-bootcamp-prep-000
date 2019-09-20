/*function takeANumber (line, name){
  return "Welcome, Ada. You are number 1 in line."
}*/

  
function takeANumber(line,name){
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}



function nowServing(line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!"
  } else{

  return `Currently serving ${line.shift()}.`
}}
  

var line = []

function currentLine(katzDeli) {
  if (katzDeli.length === 0) {
    return "The line is currently empty.";
  }
  var i = 0;
  while (i < katzDeli.length) {
    line.push(` ` + [i+1]+`. `  + katzDeli[i])
    i++;
  
  } 
  return(`The line is currently:` + line);
}
  


