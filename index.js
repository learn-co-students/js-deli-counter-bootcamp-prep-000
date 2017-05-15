var katzDeliLine = [];

function takeANumber(katzDeliLine, newCustomer){
  katzDeliLine.push(newCustomer);
  return `Welcome, ${newCustomer}. You are number ${katzDeliLine.length} in line.`;
};

function nowServing(katzDeliLine){
  var serving = [];
  if(katzDeliLine.length > 0){
    serving = katzDeliLine.shift();
    return `Currently serving ${serving}.`;
    serving.pop();
  } else {
    return "There is nobody waiting to be served!";
  }
};

function currentLine(katzDeliLine){
  var line = [];
  if (katzDeliLine.length>0){
    for (let i=0;i<katzDeliLine.length;i++){
      line.push(` ${i + 1}. ${katzDeliLine[i]}`);
    }
    return `The line is currently:${line}`;
  } else {
  return "The line is currently empty."  
  }  
};