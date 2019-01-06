function takeANumber (katzDeliLine, name){
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing (katzDeliLine){
  return (katzDeliLine.length === 0)? "There is nobody waiting to be served!" : `Currently serving ${katzDeliLine.shift()}.`
}

function currentLine (katzDeliLine){
var i = 0;
var string ="The line is currently: ";

  while(i<katzDeliLine.length -1){
    string += `${i+1}. ${katzDeliLine[i]}, `;
    i++
  }
  return (katzDeliLine.length === 0)? "The line is currently empty." : string + `${katzDeliLine.length}. ${katzDeliLine[katzDeliLine.length -1]}`;
}
