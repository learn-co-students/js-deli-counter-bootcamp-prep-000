var katzDeliLine = [];
function takeANumber(katzDeli, name) {
  katzDeli.push(`${name}`);
  return(`Welcome, ${name}. You are number ${katzDeli.length} in line.`);
}
function nowServing(katzDeli) {
  let i = 0;
  while (i < katzDeli.length) {
    i++;
  }
  if (katzDeli.length === 0) {
    return "There is nobody waiting to be served!";
  }
  else
  return (`Currently serving ${katzDeli.shift()}.`);
}	
var line = [];

 function currentLine(line) {
   var lineNum = [];
   if (line.length == 0) {
     return "The line is currently empty.";
   }
   for (var i = 0; i < line.length; i++) {
     lineNum.push(` ${i+1}. ${line[i]}`);
 	}
   return "The line is currently:" + lineNum;

  }
