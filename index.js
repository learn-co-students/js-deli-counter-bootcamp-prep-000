var katzDeli = [];

function takeANumber(katzDeli, name) {
  katzDeli.push(`${name}`);
  return(`Welcome, ${name}. You are number ${katzDeli.length} in line.`);
}

function nowServing(katzDeli){
  let i = 0;
  while (i < katzDeli.length){
    i++;
  }
  if (katzDeli.length === 0){
    return `There is nobody waiting to be served!`;
  }
  else{
    return `Currently serving ${katzDeli.shift()}.`;
  }
}

var line = [];

function currentLine(katzDeliLine){
  for (var i = 0; i < katzDeliLine.length; i++){
    line.push(` `+ [1 + i] + `. ` + katzDeliLine[i]);
  }
  if (katzDeliLine.length === 0){
    return `The line is currently empty.`;
  }
  else{
    return(`The line is currently:` + line);
  }
}