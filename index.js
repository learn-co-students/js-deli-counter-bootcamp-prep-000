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


function currentLine (katzDeli, name){
  let i=0;
  while (i < katzDeli.length){
  i++;}
  if (katzDeli===0){return "The line is currently empty"}
  else {`The line is currently: ${katzDeli.length[name]}. ${name}`}
}