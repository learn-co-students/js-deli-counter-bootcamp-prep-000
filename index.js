function takeANumber(line, name) {
  line.push(name); 
  for (let line = 0; line < line.length; line++); {
  do return `Welcome, ${name}. You are number ${line.length} in line.`;  
  while (line > 0); }
  return line;  
}

function nowServing(line, name) {
 if (line.length === 0) { return "There is nobody waiting to be served!";}
 do return `Currently serving ${line.shift()}.`; 
  while (line.length > 0); 
  line.shift(name); 
}

function currentLine(line) {
   var katzDeli = []; 
   if (line.length === 0) { return "The line is currently empty."; } 
   for (var i = 0; i < line.length; i++) {
    katzDeli.push(` ${i + 1}. ${line[i]}`); }
  return `The line is currently:${katzDeli}`;   
} 