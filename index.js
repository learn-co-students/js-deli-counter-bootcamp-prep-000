function takeANumber(katzDeliLine, customer) {
  katzDeliLine.push(customer);
  return("Welcome, " + customer + ". You are number " + katzDeliLine.length + " in line.");
}



function nowServing(katzDeliLine) {

if (katzDeliLine.length === 0) {
  
    return("There is nobody waiting to be served!");
    
  } else {
    return("Currently serving " + katzDeliLine.shift() + ".");
    
  }
}


function currentLine (katzDeliLine) {
  
  var lineNumberAndCustomer = [];
  
  for (let i = 0; i < katzDeliLine.length; i++) {
    lineNumberAndCustomer += (i + 1) + ". " + katzDeliLine[i] + ", "
  }
    
  
if (katzDeliLine.length === 0) {
    
    return("The line is currently empty.");
} else {
  
  lineNumberAndCustomer = lineNumberAndCustomer.slice(0, lineNumberAndCustomer.length-2)
  return("The line is currently: " + lineNumberAndCustomer);
  
}
}

