var katzDeli = [];
 function takeANumber (katzDeliLine, person) {
 
 katzDeliLine.push(person);
 
 return `Welcome, ${person}. You are number ${katzDeliLine.length} in line.`
 }
 
 function nowServing(katzDeliLine){ 
   var current = katzDeliLine.shift()
   if ( katzDeliLine.length === 0 ){ 
    return "There is nobody waiting to be served!"}
    else {
      return `Currently serving ${current}.`
    }
 }
 
 var line = [];

function currentLine(katzDeli) {
  for (let i = 0; i < katzDeli.length; i++) {
    line.push(` `+[i+1]+`. `  + katzDeli[i])
  }
  if (katzDeli.length === 0) {
    return "The line is currently empty.";
  } else
  return(`The line is currently:` + line);
}