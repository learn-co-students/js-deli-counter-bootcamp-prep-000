var katzDeli = [];
var katzDeliLine = [];
function takeANumber(katzDeliLine, name){
  var lineCount = katzDeliLine.length;

    katzDeliLine.push(name);
    lineCount++;
    return`Welcome, ${name}. You are number ${lineCount} in line.`
  
}

function nowServing (katzDeliLine){
  var counter = 0;
  
  if (katzDeliLine.length === 0){
    return `There is nobody waiting to be served!`;
  }
  
  do {
      return `Currently serving ${katzDeliLine.shift()}.`
      //katzDeliLine.shift();
      // counter++;
  }
  while (katzDeliLine.length !== 0)
  
}

function currentLine(katzDeliLine){
  
  var numberInLine = 0;
  var returnArray = [];
  if (katzDeliLine.length === 0){
     return `The line is currently empty.`;
   }
  
  for (let i = 0; i<katzDeliLine.length; i++){
    numberInLine++;
    returnArray.push(`${numberInLine}. ${katzDeliLine[i]}`);
  }
  
  return `The line is currently: ${returnArray.join(", ")}`

}
