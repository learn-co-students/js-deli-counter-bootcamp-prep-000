var katzDeli = []


function takeANumber(katzDeliLine, name) {
   katzDeliLine.push(name);
  for (var i = katzDeliLine.length; i > 0; i--) {
   return `Welcome, ${name}. You are number ${i} in line.`;
  }
}


function nowServing(katzDeliLine) {
  if (!katzDeliLine.length) {
      return "There is nobody waiting to be served!";
    }
 
  var name = katzDeliLine.shift();
    return  `Currently serving ${name}.`;
}
 


function currentLine(katzDeliLine) {
  if (!katzDeliLine.length) {
      return "The line is currently empty.";
    } 
  
  var line =  [];
  for (var i = 0; i < katzDeliLine.length; i++) {
    line.push(`${i + 1}. ${katzDeliLine[i]}`);
  }
     return `The line is currently: ${line.join(", ")}`;
}   
  