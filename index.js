
var katzDeliLine = [];

function takeANumber(katzDeliLine, newCustomer){
  katzDeliLine.push(newCustomer);
  return `Welcome, ${newCustomer}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length <= 0){
    return "There is nobody waiting to be served!";
  } else {
    return `Currently serving ${katzDeliLine.shift(1)}.`;
  }
}

function currentLine(line){
  var newArray = [];

  if(line.length <= 0){
    return "The line is currently empty.";
  } else {
    for(var i = 0; i < line.length; i++){
      newArray.push(` ${i + 1}. ${line[i]}`);
    }
    return `The line is currently:${newArray}`;
  }
}

