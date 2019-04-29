function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return "Welcome, " + name+"." + " You are number " + katzDeliLine.length + " in line.";
}

function nowServing(katzDeliLine){
  
  if (katzDeliLine.length===0){
    return 'There is nobody waiting to be served!'}
  if(katzDeliLine.length > 1){
    "Currently serving "+katzDeliLine[0]+"."}  
    katzDeliLine.shift(0);
    return katzDeliLine;
}

function currentLine(katzDeliLine){
  
}