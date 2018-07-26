var katzDeli = []
function takeANumber(katzDeliLine, newPersonsName) {
      katzDeliLine.push(newPersonsName)
      return "Welcome, " + newPersonsName + ". You are number " + katzDeliLine.length + " in line."; 
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0 ) {
    return "There is nobody waiting to be served!"
  } else {
    var servingCustomer = katzDeliLine[0]
    katzDeliLine.shift();
    return "Currently serving " + servingCustomer + "."; 
  }
}


function currentLine(katzDeliLine){
  var current = '';
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
} else { for (var i = 0; i < katzDeliLine.length; i++) {
  if (i== katzDeliLine.length -1) {
  	current = current + (i + 1) + ". " + katzDeliLine[i] ; 
    } else {
     current = current + (i + 1) + ". " + katzDeliLine[i] + ", "
      }
}
  return "The line is currently: " + current; 
}
}