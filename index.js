var katzDeli = [];

function takeANumber(katzDeli, katzDeliLine){
  katzDeli.push(`${katzDeliLine}`);
  return (`Welcome, ${katzDeliLine}. You are number ${katzDeli.length} in line.`);
}

function nowServing(katzDeliLine){
  let i = katzDeliLine.length;
  if (i > 0){
    return (`Currently serving ${katzDeliLine.shift()}.`);
  }
  else{
    return ("There is nobody waiting to be served!");
  }
}

function currentLine(katzDeliLine){
  let i = 0;
  while (i < katzDeliLine.length){
    return (`The line is currently: ${i+1}. ${katzDeliLine[i]}, ${i++}. ${katzDeliLine[i+1]}, 3. ${katzDeliLine[2]}`);
  }
  return ("The line is currently empty.");
}