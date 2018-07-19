var katzDeliLine= [];

function takeANumber(katzDeliLine,name) {
    katzDeliLine.push(name);
    return `Welcome, ${name}. You are number ${katzDeliLine.indexOf(name,0)+1} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0 ) { 
    var servingName = katzDeliLine.shift();
  return `Currently serving ${servingName}.`;
    } else {
  return "There is nobody waiting to be served!";
}  
}

function currentLine(katzDeliLine) {
  var newDeliLine = [];
  if (katzDeliLine.length > 0) {
    for(let i = 0; i < katzDeliLine.length ; i++){
    newDeliLine = [...newDeliLine, ` ${i+1}. ${katzDeliLine[i]}`];
     } return `The line is currently:${newDeliLine}`;
    } else {
      return "The line is currently empty.";
}
}
 