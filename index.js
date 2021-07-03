var katzDeliLine = [];

function takeANumber(katzDeliLine, customerName) {
  katzDeliLine.push(customerName);
  return `Welcome, ${katzDeliLine[katzDeliLine.length - 1]}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  if(katzDeliLine.length === 0) {
  return "There is nobody waiting to be served!";
  } else {
  var announce = `Currently serving ${katzDeliLine[0]}.`;
  katzDeliLine.shift();
  return announce;
  }
}

function currentLine(katzDeliLine) {
  if(katzDeliLine.length === 0){
    return "The line is currently empty."
  } else {
    var lineAnnounce = "The line is currently: ";
    for(var i=0; i < katzDeliLine.length; i++) {
      lineAnnounce += `${i + 1}. ${katzDeliLine[i]}`
      if(i < katzDeliLine.length - 1) {
        lineAnnounce += ", "
      }
    }
    return lineAnnounce;  
  }
}