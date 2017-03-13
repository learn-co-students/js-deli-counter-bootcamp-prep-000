function takeANumber(katzDeliLine, newName){
  katzDeliLine.push(newName);
  return `Welcome, ${newName}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length>=1){
    return `Currently serving ${katzDeliLine.shift()}.`;
  }
  else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(line){

var string = `The line is currently: 1. ${line[0]}`
var n = 2

if(line.length>=1){
    for (let i=1; i<line.length; i++){
      string = string + `, ${n}. ${line[i]}`;
      n++
    }
  }
  else{
    string = "The line is currently empty."
  };
  return string
}
