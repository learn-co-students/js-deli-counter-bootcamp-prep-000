var katzDeliLine = [];

function takeANumber(katzDeliLine, person){
  katzDeliLine.push(`${person}`);
  return (`Welcome, ${person}. You are number ${katzDeliLine.length} in line.`);}

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


var person = [];
function currentLine(katzDeliLine) {
  let i = 0;
  while (i < katzDeliLine.length) 
  {
  person.push(` `+[i + 1]+`. `  + katzDeliLine[i]);
    i++;
  }
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  } else
  return(`The line is currently:` + person);
}

