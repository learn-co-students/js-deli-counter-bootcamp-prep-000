var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  if(katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else{
    return `Currently serving ${katzDeliLine.shift()}.`;
  }
}

function currentLine(katzDeliLine){
  let i = 0;
  while (i < katzDeliLine.length){
    return (`The line is currently: ${i+1}. ${katzDeliLine[i]}, ${i+2}. ${katzDeliLine[i+1]}, ${i+3}. ${katzDeliLine[i+2]}`);
  }
  return ("The line is currently empty.");
}