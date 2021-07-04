
var katzDeli = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeli){
  if (katzDeli.length === 0){
    return "There is nobody waiting to be served!";
  }
  else {
    return `Currently serving ${katzDeli.shift()}.`;
  }
}

function currentLine(line){
  var lineStr = `The line is currently: `;
  if (line.length === 0){
    return "The line is currently empty.";
  }
  else {
    for(var n=0; n<line.length; n++){
      lineStr += `${n+1}. ${line[n]}, `;
    }
  }
  return lineStr.substr(0, lineStr.length-2);
}
