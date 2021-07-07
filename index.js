var katzDeliLine = []; 

function takeANumber(katzDeliLine, customerName){
  katzDeliLine.push(`${customerName}`);
  return (`Welcome, ${customerName}. You are number ${katzDeliLine.length} in line.`);
}

function nowServing(katzDeliLine, customerName){
  if (katzDeliLine.length === 0){
  return (`There is nobody waiting to be served!`);
  } else {
    var firstCustomer = katzDeliLine.shift();
    return (`Currently serving ${firstCustomer}.`);
  } 
}

function currentLine(line){
   if (line.length === 0){
    return (`The line is currently empty.`)}
  
  var lineLength = [];
  for (var i = 0; i < line.length; i++){
  lineLength.push(` ${i+1}. ${line[i]}`);
  }
  return (`The line is currently:`) + lineLength;   
}    