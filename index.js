function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  
  var position = katzDeliLine.length;
  
  return `Welcome, ${name}. You are number ${position} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    
    var name = katzDeliLine.shift();
    return `Currently serving ${name}.`;
    
  } else {
    
    return "There is nobody waiting to be served!";
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    
    return "The line is currently empty.";
    
  } else {
    
    var announcement = "The line is currently: ";
    
    for (let posn = 1; posn <= katzDeliLine.length - 1; posn++) {
      var customer = katzDeliLine[posn - 1];
      
      announcement += `${posn}. ${customer}, `;
    }
    
    var lastPosn = katzDeliLine.length;
    var lastCustomer = katzDeliLine[katzDeliLine.length - 1];
    
    announcement += `${lastPosn}. ${lastCustomer}`;
    
    return announcement;
  }
}