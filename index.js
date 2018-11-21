const takeANumber = (katzDeliLine, customerName) => {
  katzDeliLine.push(customerName);
  return `Welcome, ${customerName}. You are number ${katzDeliLine.length} in line.`;
}

const nowServing = (katzDeliLine) => {
  if(katzDeliLine.length === 0){
    return `There is nobody waiting to be served!`;
  }else{
    return `Currently serving ${katzDeliLine.shift()}.`;
  }
}

const currentLine = (katzDeliLine) => {
  var message=[];
  if(katzDeliLine.length === 0){
     return `The line is currently empty.`;
  }else{
    for(let i = 0; i < katzDeliLine.length; i++){
       message.push(` ${[i+1]}. ${katzDeliLine[i]}`);
     }
     return `The line is currently:${message}`;
  }
}