var katzDeliLine = []

function takeANumber(array, name) {
  array.push(name);
  return `Welcome, ${name}. You are number ${array.length} in line.`;
}

 function nowServing(array) {
  if (array.length > 0) { 
    return `Currently serving ${array.shift()}.`;
  } else {
    return `There is nobody waiting to be served!`
  }
 }
 
 function currentLine(array) {
   var newArray = [];
   var n = 0;
   if (n < array.length) {
     while (n < array.length) {
     newArray.push(` ${[n + 1]}. ${array[n]}`), n++;
     } return `The line is currently:${newArray}`;
   } else {
     return `The line is currently empty.`;
   }
 }