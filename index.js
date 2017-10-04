var katzDeli = [];

function takeANumber(katzDeliLine, customerName){
  katzDeliLine.push(customerName);
  return 'Welcome, ' + customerName + '. You are number ' + katzDeliLine.length + ' in line.'
}

function nowServing(customerList){
  if(customerList.length > 0){
    var next = customerList[0];
    customerList.shift();
    return 'Currently serving ' + next + '.';

  } else {
    return 'There is nobody waiting to be served!';
  }
}

function currentLine(theLine){
  if(theLine > 0){
    var statement = 'The line is currently: '
    var lineNumber = 1
    for(let i = 0; i < theLine.length; i++){
      statement = statement + lineNumber + '. ' + theLine[i] + ', ';
      lineNumber++;
    }
  }

  else {

  }
}
