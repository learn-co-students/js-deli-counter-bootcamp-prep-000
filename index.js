var katzDeli = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  katzDeli = katzDeliLine;
  return `Welcome, ${name}. You are number ${katzDeli.length} in line.`;
}

function nowServing(katzDeliLine){
  katzDeli = katzDeliLine;
  if(katzDeli.length === 0){
    return "There is nobody waiting to be served!";
  }
  let customer = katzDeli.shift();
  return `Currently serving ${customer}.`;
}

function currentLine(katzDeliLine){
  katzDeli = katzDeliLine;
  if(katzDeli.length === 0){
    return "The line is currently empty.";
  }
  let returnString = "The line is currently: ";
  for(let i=0; i< katzDeli.length; i++){
    returnString += i === katzDeli.length-1 ? `${i+1}. ${katzDeli[i]}`: `${i+1}. ${katzDeli[i]}, `
  }
  return returnString;
}
