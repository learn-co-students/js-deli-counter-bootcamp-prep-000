function takeANumber (katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}





function nowServing (katzDeliLine) {
  if (katzDeliLine.length>0) {
     return `Currently serving ${katzDeliLine.shift()}.`;
  } else {
     return `There is nobody waiting to be served!`;
  }
}




function currentLine (katzDeliLine) {
  if (katzDeliLine.length>0) {
     let newArray = [];
    for (let i = 1; i<katzDeliLine.length + 1; i++) {
         newArray.push(`${i}. ${katzDeliLine[i-1]}`);
         
    }
    return `The line is currently: ${newArray.join(', ')}`;
  } else { 
    return `The line is currently empty.`;
  }
  
}