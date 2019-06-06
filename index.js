function takeANumber(katzDeliLine,name){
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length === 0){
    return `There is nobody waiting to be served!`;
  }
  else{
    return `Currently serving ${katzDeliLine.shift()}.`;
}
}

function currentLine(katzDeliLine){
 
 let i=0;
 var startString = `The line is currently: `;
 for(i;i < katzDeliLine.length-1;i++){
   startString += `${i+1}. ${katzDeliLine[i]}, `;
 }
 if(katzDeliLine.length === 0){
   return `The line is currently empty.`;
 }
 return startString += `${i+1}. ${katzDeliLine[i]}`;
 
}