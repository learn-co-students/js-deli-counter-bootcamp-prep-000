function takeANumber(katzDeliLine, customerName) {
  katzDeliLine.push(customerName);
  
  return `Welcome, ${customerName}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  
  if(katzDeliLine.length !== 0) {
    return `Currently serving ${katzDeliLine.shift()}.`;
  } else {
    return "There is nobody waiting to be served!"
  }
  
}

function currentLine(katzDeliLine) {
  
  
   if(katzDeliLine.length !== 0) {
     let line = "The line is currently:";
     
     for (let i = 0; i < katzDeliLine.length; i++) {
       
       line = `${line} ${i + 1}. ${katzDeliLine[i]}${i === katzDeliLine.length - 1 ? '' : ','}`;
     }
     
     return line;
     
   } else {
     return "The line is currently empty.";
   }
  
}