var katzDeliLine = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(deliLine){
  while(deliLine.length > 0) {
      return "Currently serving " + deliLine.shift() + "."
    }
    if (deliLine.length == 0){
      return "There is nobody waiting to be served!"
    }
}

function currentLine(line){
  var waiting = [];
  for(let i = 0; i < line.length; i++){
      waiting.push(`${i + 1}. ${line[i]}`);
    }
    if(line.length == 0) {
      return "The line is currently empty."
    }
    else {
    return "The line is currently: " + waiting.join(", ");
    }
}
