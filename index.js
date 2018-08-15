function takeANumber(katzDeli, name) {
  katzDeli.push(name)
  return "Welcome, " + name + ". You are number " +  katzDeli.length + " in line." 
}


function nowServing(katzDeli){
  if (katzDeli.length === 0){
    return "There is nobody waiting to be served!"
  }
  else {
  var firstInLine = katzDeli[0]
  katzDeli.shift()
  return "Currently serving " + firstInLine + "."
  }
}



 function currentLine(katzDeliLine) {
   if (katzDeliLine.length === 0) {
   return "The line is currently empty.";
 }
 else {
    var customer = [];
    for (var i = 0; i < katzDeliLine.length; i++) {
    customer.push(i + 1 + ". " + katzDeliLine[i])
    }
 }
   return "The line is currently: " + customer.join(", ");
 }