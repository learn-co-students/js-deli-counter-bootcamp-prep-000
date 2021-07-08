var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
  
}

function nowServing(katzDeliLine) {
  if(katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    var personName = katzDeliLine.shift();
    return `Currently serving ${personName}.`;
  }
}

function currentLine(katzDeliLine) {
  if(katzDeliLine.length === 0) {
    return "The line is currently empty.";
  } else {
    var message = "The line is currently: ";
    for(var i = 0; i < katzDeliLine.length; i++) {
      if(i != (katzDeliLine.length - 1)) {
        message += (i + 1)+". "+ katzDeliLine[i]+", ";
      }else {
        message += (i + 1)+". "+ katzDeliLine[i];
      }
      
    }
    // console.log(message);
    
    return message;
  }
  
}