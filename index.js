function takeANumber(katzDeli, name) {
  katzDeli.push(name);
  return `Welcome, ${name}. You are number ${katzDeli.length} in line.`
 }

function nowServing(katzDeli) {
    if(katzDeli.length>1) {
 return `Currently serving ${katzDeli.shift()}.`;
} else {
    return  "There is nobody waiting to be served!"
   }
 }

 function currentLine(line) {
   if (line.length === 0) {
     return "The line is currently empty."
   }
   const peopleInLine = [];

   for (let i = 0, l = line.length; i < l; i++) {
     peopleInLine.push(`${i + 1}. ${line[i]}`);
   }

   return `The line is currently: ${peopleInLine.join(', ')}`;
 }
