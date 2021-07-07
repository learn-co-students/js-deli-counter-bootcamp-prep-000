var katzDeliline = [];

function takeANumber(katzDeliline, newPerson){
  katzDeliline.push(`${newPerson}`);
  return (`Welcome, ${newPerson}. You are number ${katzDeliline.length} in line.`);
}

function nowServing(katzDeliLine){
  let i = 0; 
  if (i < katzDeliLine.length){
    i++;
  }
  if (katzDeliLine.length === 0){
    return (`There is nobody waiting to be served!`);
  }
  else
  return (`Currently serving ${katzDeliLine.shift()}.`);
}

var line = [];

function currentLine(katzDeliLine){
  let i = 0;
  while (i < katzDeliLine.length) {
    line.push(` `+ [i+1] + `. ` + katzDeliLine[i])
    i++;
  }
  if (!katzDeliLine.length){
    return (`The line is currently empty.`);
  }
  return(`The line is currently:` + line);
}

