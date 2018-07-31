var katzDeliLine = [];

function takeANumber(katzDeliLine, newCustomer){
  katzDeliLine.push(newCustomer);
  return `Welcome, ${newCustomer}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length>=1) {
    return `Currently serving ${katzDeliLine.splice(0,1)}.`;
  } else {
    return `There is nobody waiting to be served!`;
  }
}

function currentLine(katzDeliLine){
  if (katzDeliLine.length>1){
    var incrementNumbersWithNames = [];
  
    for (let katzDeliLineIndex = 0; katzDeliLineIndex < katzDeliLine.length; katzDeliLineIndex++){
        incrementNumbersWithNames.push(` ${katzDeliLineIndex + 1}. ${katzDeliLine[katzDeliLineIndex]}`)
    }
    return `The line is currently:${incrementNumbersWithNames}`
  }else{
    return `The line is currently empty.`;
  }
}
  
/* took off the '='' sign in line 17 and 20 with '>=' and fixed the '4. undefined error'
  
  
  /*if (katzDeliLine.length>=1){
    return `The line is currently: 1. ${katzDeliLine[0]}, 2. ${katzDeliLine[1]}, 3. ${katzDeliLine[2]}`;
  } else {
   return `The line is currently empty.`;
  }*/

