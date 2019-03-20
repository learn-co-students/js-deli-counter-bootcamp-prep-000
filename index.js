function takeANumber(katzDeli, newName){
  katzDeli.push(newName);
  return `Welcome, ${newName}. You are number ${katzDeli.length} in line.`;
}

function nowServing(katzDeliLine){
  var first=katzDeliLine[0];
  katzDeliLine.shift();
  if(katzDeliLine[0]===undefined){
    return "There is nobody waiting to be served!";
  }
  return `Currently serving ${first}.`;
}

function currentLine(line){
  var theLine=[];
  for (let i = 0; i < line.length; i++){
    theLine.push(` `+[i+1]+`. `  + line[i]);
  }
  if (line.length === 0) {
    return "The line is currently empty.";
  } else
  return(`The line is currently:` + theLine);
}
