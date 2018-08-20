
function takeANumber(line, name){
    line.push(name);
  return`Welcome, ${name}. You are number ${line.length} in line.`
  }


function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    return`Currently serving ${katzDeliLine.shift()}.`
  }
  
  else {
    return "There is nobody waiting to be served!"
  }
}
// .shift() function removes the first item in the array AND returns it

function currentLine(line) {
  var list = [];
  for (var i = 0; i < line.length; i++) {
    list.push(` `+[i + 1] +`. ` + line[i])
  }
  if (line.length === 0) {
    return "The line is currently empty."
  } 
  
  else {
      return `The line is currently:${list}`
   }
}

// Using existing array info in a different format = array creation & string creation, returning new array as interpolated variable. 
// Created an empty array. Set i to zero. Made the condition that as long as i was less than the length of the line, it would increment. .push-ed new format onto created (list)array. Can use empty spaces that are interpolated to format. Added incrementing i for numbers and index of old array.