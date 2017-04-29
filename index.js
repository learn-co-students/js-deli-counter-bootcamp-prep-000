var katzDeliLine = [];
function takeANumber(katzDeliLine,name){
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine){
  var name = katzDeliLine.shift();
  return name !== undefined ? `Currently serving ${name}.`: "There is nobody waiting to be served!";
}

function currentLine(katzDeliLine){
  var deliLine= 'The line is currently: ';
  for (var lineNum in katzDeliLine){
    deliLine += `${parseInt(lineNum)+1}. ${katzDeliLine[lineNum]}${lineNum < katzDeliLine.length-1 ? ', ':''}`;
  }
  return katzDeliLine[0] !== undefined ? deliLine : "The line is currently empty.";

}
