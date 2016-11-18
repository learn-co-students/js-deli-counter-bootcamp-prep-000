function takeANumber(katzDeliLine, newCustomer){
  katzDeliLine.push(newCustomer);
  return `Welcome, ${newCustomer}. You are number ${katzDeliLine.length} in line.`;

}

function nowServing(katzDeliLine){
  if (katzDeliLine.length > 0){
    return `Currently serving ${katzDeliLine.shift()}.`;
  }else{
    return "There is nobody waiting to be served!";
  }

}

function currentLine(katzDeliLine){
  if (katzDeliLine.length > 0){
    var retArr = [];
    for (let i = 0; i < katzDeliLine.length; i++){
      retArr.push(` ${i + 1}. ${katzDeliLine[i]}`);
    }
    return `The line is currently:${retArr.toString()}`;
  }else{
    return "The line is currently empty."
  }

}
