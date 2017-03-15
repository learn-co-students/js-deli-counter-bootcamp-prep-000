var katzDeli = [];

function takeANumber(katzDeliLine, personName){
  katzDeliLine.push(personName);
  return `Welcome, ${personName}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length === 0){
    return "There is nobody waiting to be served!";
  } else {
    var servingCustomer = katzDeliLine.shift();
    return `Currently serving ${servingCustomer}.`;
  }
}

function currentLine(katzDeliLine){
  if(katzDeliLine.length === 0){
    return "The line is currently empty.";
  } else {
    var inLine = [];
    for(var i = 0; i < katzDeliLine.length; i++ ){
      inLine.push(`${i + 1}. ${katzDeliLine[i]}`);
    }
    return `The line is currently: ${inLine.join(', ')}`;
  }
}