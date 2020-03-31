function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  var position = katzDeliLine.length;
  return `Welcome, ${name}. You are number ${position} in line.`;
}

function nowServing(line){
  let i = 0;
  while (i < line.length) {
    i++;
  }
  if(line.length === 0){
    return "There is nobody waiting to be served!";
  } else {
    return (`Currently serving ${line.shift()}.`);
  }
}

function currentLine(katzDeliLine){
  if(katzDeliLine.length > 0){
    var namePos = [];
    for(let i = 0; i < katzDeliLine.length;i++){
      namePos.push(` ${i+1}. ${katzDeliLine[i]}`);
    }
    return `The line is currently:${namePos}`;
  } else {
      return "The line is currently empty.";
  }
}
