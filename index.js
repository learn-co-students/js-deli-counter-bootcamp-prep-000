//katzDeli is empty array
//var katzDeliLine = [];
//katzDeli is empty array
//var katzDeliLine = [];

function takeANumber(katzDeli, newPersonName){
 katzDeli.push(`${newPersonName}`);
 
return(`Welcome, ${newPersonName}. You are number ${katzDeli.length} in line.`);
}

function nowServing(katzDeli) {
  if (katzDeli.length === 0) {
    return "There is nobody waiting to be served!";
  }
  else
  return (`Currently serving ${katzDeli.shift()}.`);
}

var empty = [];
function currentLine(katzDeli) {
  let i = 0;
  while (i < katzDeli.length) {
    empty.push(` `+[i+1]+`. `  + katzDeli[i])
    i++;
  }
  if (katzDeli.length === 0) {
    return "The line is currently empty.";
  } else
  return(`The line is currently:` + empty);
}