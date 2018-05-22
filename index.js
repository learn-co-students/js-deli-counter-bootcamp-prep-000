var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  var number = katzDeliLine.length + 1;
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${number} in line.`;
}

function nowServing(katzDeliLine) {

 if (katzDeliLine.length > 0) {
    return ("Currently serving " + katzDeliLine.shift() + ".");
 }
   
 else {
   return "There is nobody waiting to be served!"
 }
}

 function currentLine(katzDeliLine) {
    
    if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  }
  
  else {
  var currentLineIndex = []
  for (var i = 0; i < katzDeliLine.length; i++) {
   currentLineIndex.push(i + 1 + ". " + katzDeliLine[i]);
   }
   
   return "The line is currently: " + currentLineIndex.join(", "); 
   
  }
  
 } 