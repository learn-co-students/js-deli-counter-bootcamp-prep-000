var katzDeliLine = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.indexOf(name)+1} in line.`;
}
  
function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0)
  return "There is nobody waiting to be served!";
  else (katzDeliLine.length>0)
  return `Currently serving ${katzDeliLine.shift()}.`;
}

function currentLine(katzDeliLine){
  var string=`The line is currently:`;
  if (katzDeliLine.length===0)
  return "The line is currently empty.";
  else if (katzDeliLine.length > 0)
  for (let i=0; i < katzDeliLine.length; i++){
    string += ` ${i+1}. ${katzDeliLine[i]},`;
  }
  return string.slice(0,string.length-1);
}