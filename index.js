var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return (`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`);  
}

function nowServing(katzDeliLine) {
  //let i = katzDeliLine;
  if (katzDeliLine.length > 0) {
    return (`Currently serving ${katzDeliLine.shift()}.`);
  }
  return ("There is nobody waiting to be served!");
}

function currentLine(katzDeliLine) {
    if (katzDeliLine.length===0) {
      return ( "The line is currently empty.");
    } else (katzDeliLine > 0); 
        return (`The line is currently: 1. ${katzDeliLine[0]}, 2. ${katzDeliLine[1]}, 3. ${katzDeliLine[2]}`);
}