function takeANumber (katzDeliLine, name){
  katzDeliLine.push(name);
  return (`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`);
}

function nowServing (katzDeliLine){
  let i =0;
  while (i<katzDeliLine.length){
     i++;
    return (`Currently serving ${katzDeliLine.shift()}.`);
    
  }
  return 'There is nobody waiting to be served!';
}

var line = [];
 function currentLine(katzDeli) {
  let i = 0;
  while (i < katzDeli.length) {
    line.push(` `+[i+1]+`. `  + katzDeli[i])
    i++;
  }
  if (katzDeli.length === 0) {
    return "The line is currently empty.";
  } else
  return(`The line is currently:` + line);
}
