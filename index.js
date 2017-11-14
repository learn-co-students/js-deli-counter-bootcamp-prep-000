var katzDeli = [];

function takeANumber(katzDeliLine, person){
  katzDeliLine.push(person);
  return `Welcome, ${person}. You are number ${katzDeliLine.length} in line.`;
}

function currentLine(katzDeliLine){
  if (katzDeliLine.length === 0) return "The line is currently empty.";
  return 'The line is currently: ' + katzDeliLine.map((x,y)=>y+1 + ". " + x).join(", ");
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) return "There is nobody waiting to be served!"
  return "Currently serving " + katzDeliLine.shift() + ".";
}