var katzDeli = [];

function takeANumber(katzDeli, katzDeliLine){
  katzDeli.push(`${katzDeliLine}`);
  return (`Welcome, ${katzDeliLine}. You are number ${katzDeli.length} in line.`);
}

function nowServing(katzDeliLine){
  let i = katzDeliLine.length;
  while (i > 0){
    return (`Currently serving ${katzDeliLine[0]}.`);
  }
  katzDeliLine.shift();
  return ("There is nobody waiting to be served!");
}

function currentLine(katzDeliLine){
  while (i > 0){
    return (`The line is currently: `);
  }
  return ("The Line is currently empty.");
}