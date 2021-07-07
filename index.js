var katzDeli=[];
function takeANumber(katzDeli, name){
 katzDeli.push(name);
 var position=katzDeli.length;
 return `Welcome, ${name}. You are number ${position} in line.`}
  
 

function nowServing (katzDeli){
  let i=0;
  while (i < katzDeli.length){
  i++;}
//} after i++ closes the while loop, yet the remaining oft the function repeats
  if (katzDeli.length ===  0) {
    return "There is nobody waiting to be served!"}
  else {return `Currently serving ${katzDeli.shift()}.`}
}

var lineInfo=[]
function currentLine (katzDeli){
  let i=0;
  while (i < katzDeli.length){
    lineInfo.push(` ${i+1}. ${katzDeli[i]}`)
  i++;}
  
  if (lineInfo.length > 0) {return `The line is currently:${lineInfo}`}
  else {return "The line is currently empty."}
}