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



var line = [];

function currentLine(katzDeliLine) {
  for (var i = 0; i < katzDeliLine.length; i++) {
    line.push(` ${i+1}. ${katzDeliLine[i]}`);
  }
  if (katzDeliLine.length > 0) {
    return (`The line is currently:${line}`);
  } else {
     return ("The line is currently empty.");
  }
}


