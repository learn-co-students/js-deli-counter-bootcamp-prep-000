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
    return (`The line is currently: ${i+1}. ${katzDeliLine[i]}, ${i+2}. ${katzDeliLine[i+1]}, ${i+3}. ${katzDeliLine[i+2]}`);
  }
  return ("The line is currently empty.");
}


/*function currentLine(katzDeliLine){
  var lineValues = [];
  if (katzDeliLine.length > 0){  
    for(let i = 0; i < katzDeliLine.length; i++){
      return (`The line is currently: ${i+1}. ${katzDeliLine[i]}, `);
    }
  }
  else {  
    return ("The line is currently empty.");
  }
}*/