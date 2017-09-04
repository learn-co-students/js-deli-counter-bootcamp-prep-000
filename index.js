var katzDeli = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length === 0){
    return 'There is nobody waiting to be served!';
  }
  var serving = katzDeliLine.shift();
  return `Currently serving ${serving}.`

}

function currentLine(katzDeliLine){
  if(katzDeliLine.length === 0){
    return 'The line is currently empty.'
  } else {
    var toReturn = `The line is currently: 1. ${katzDeliLine[0]}`;
    for(let i =1;i<katzDeliLine.length; i++){
      toReturn += `, ${i+1}. ${katzDeliLine[i]}`
    }
    return toReturn;
  }
}
