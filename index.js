function takeANumber(currentLine, newPerson) {
  currentLine.push(newPerson);
  return(`Welcome, ${newPerson}. You are number ${currentLine.length} in line.`);
}



function nowServing(katzDeliLine) {
  var deliLine = [...katzDeliLine];
   if (deliLine.length > 0) {
     katzDeliLine.shift([0]);
     return(`Currently serving ${deliLine[0]}.`);
   } else {
     return ("There is nobody waiting to be served!");
   }
}

function currentLine(line) {
  
}