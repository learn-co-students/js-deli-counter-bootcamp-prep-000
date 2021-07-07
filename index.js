function takeANumber(katzDeliLine, name) {
  var position = katzDeliLine.length + 1;
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${position} in line.`;
}

function nowServing(deliLine){
  let i = 0;
  while (i < deliLine.length){
      return `Currently serving ${deliLine.shift()}.`;
      i++;
  }
  return "There is nobody waiting to be served!"
}
function currentLine(line){
  var lineList = [];
  for (let i = 0; i < line.length; i++){
    lineList.push(` ${i+1}. ${line[i]}`);
  }
   if (line.length === 0){
    return "The line is currently empty.";
  } else {
    return `The line is currently:${lineList}`
  }
}