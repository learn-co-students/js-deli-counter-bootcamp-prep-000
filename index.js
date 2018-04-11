var katzDeliLine = [];



function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}


/*
function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  var position = katzDeliLine.indexOf(name);
  return `Welcome, ${name}. You are number ${position + 1} in line.`;
}
// Considering indexOf returns the FIRST matching index in an array we will have issues using this if we have duplicate names.
*/

function nowServing(katzDeliLine){
  if(katzDeliLine.length === 0){
    return `There is nobody waiting to be served!`;
  }else{
    return `Currently serving ${katzDeliLine.shift()}.`;
  }
}

/*example with help
function currentLine(katzDeliLine){
  var str = "The line is currently: ";
  var line = [];
  if(katzDeliLine.length < 1){
    return `The line is currently empty.`;
  }else{
    for(let i = 0; i <katzDeliLine.length; i++){
      line[i] = `${[i+1]}. ${katzDeliLine[i]}`;
    }str += line.join(', ');
    return str;
  }
}
*/
function currentLine(katzDeliLine){
  if(katzDeliLine.length === 0){
    return `The line is currently empty.`;
  }
  var str = `The line is currently: 1. ${katzDeliLine[0]}`;
  for(let i = 1; i < katzDeliLine.length; i++){
    str += `, ${i + 1}. ${katzDeliLine[i]}`;
  }
  return str;
}

