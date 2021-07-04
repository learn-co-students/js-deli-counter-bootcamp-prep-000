var katzDeliLine = [];

function takeANumber(katzDeliLine, newPerson) {
  katzDeliLine.push(newPerson);
  return `Welcome, ${newPerson}. You are number ${katzDeliLine.length} in line.`;
}


function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var firstPerson = katzDeliLine[0];
    katzDeliLine.shift();
    return (`Currently serving ${firstPerson}.`);
  } else {
    return "There is nobody waiting to be served!";
  }
}




function currentLine(katzDeliLine){
  if(!katzDeliLine.length) {
    return "The line is currently empty.";
  }
  var lineNamesandNumbers = [];
  
  for(var i=0; i<katzDeliLine.length; i++) {
    lineNamesandNumbers.push(i+1 + ". "+ katzDeliLine[i]);
  }
  console.log("The line is currently: " + lineNamesandNumbers)
  return "The line is currently: " + lineNamesandNumbers.join(', ');
}