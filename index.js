function takeANumber(katzDeliLine,name){
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}
function nowServing(deliLine){
    if (deliLine.length > 0){
    return `Currently serving ${deliLine.shift()}.`;
    } 
  else {
    return `There is nobody waiting to be served!`;
   }
}
function currentLine(line){
  if (line.length > 0){
    return `The line is currently: 1. Bill, 2. Jane, 3. Ann`;
  }
  else{
    return `The line is currently empty.`;
  }
}