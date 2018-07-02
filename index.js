var katzDeliLine = [];

function takeANumber(katzDeliLine, personName){
  katzDeliLine.push(`${personName}`);
  return (`Welcome, ${personName}. You are number ${katzDeliLine.length} in line.`)
}

function nowServing(katzDeliLine){
  let i =0;
  while (i < katzDeliLine.length){
  i++;
  }
  if (katzDeliLine.length === 0){
    return "There is nobody waiting to be served!";
  }
  else{
    
    return (`Currently serving ${katzDeliLine.shift()}.`);
  }
}

var line = [];

function currentLine(katzDeliLine){
  for (let j=0; j <katzDeliLine.length; j++){
    line.push(j+1+'.'+' '+ katzDeliLine[j]);
  }
  if(katzDeliLine.length === 0){
    return "The line is currently empty.";
  }
  else{
    return ("The line is currently: " + line.join(', '))
  }
  
}
  
  


/*takeANumber(katzDeliLine, "Ada");
takeANumber(katzDeliLine, "Grace");
takeANumber(katzDeliLine, "Kent");

currentLine(katzDeliLine);

nowServing(katzDeliLine);

currentLine(katzDeliLine);

takeANumber(katzDeliLine, "Matz");
currentLine(katzDeliLine);
nowServing(katzDeliLine);
currentLine(katzDeliLine);*/
