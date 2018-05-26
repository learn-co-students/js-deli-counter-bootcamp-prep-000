function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeli) {
  let i = 0;
  while (i < katzDeli.length) {
    i += 1;
  }
  if (katzDeli.length === 0) {
    return `There is nobody waiting to be served!`;
  }
  else
  return (`Currently serving ${katzDeli.shift()}.`);
}

function currentLine(katzDeli) {
  let theLine = [];
  for (let i = 0; i < katzDeli.length; i += 1) {
  theLine.push(`${i + 1}. ${katzDeli[i]}`)
}
  return(`The line is currently:` + theLine);
}




function currentLine(katzDeli){
  if (katzDeli.length === 0){
    return 'The line is currently empty.';
  }
  else {
  let results = [];
  for(var i = 0; i<katzDeli.length; i += 1){
    results.push(parseInt([i])+1+'. '+katzDeli[i]);
  }
  
  return 'The line is currently: '+ results.join(', ')
}}
currentLine(['Ada', 'Grace'])