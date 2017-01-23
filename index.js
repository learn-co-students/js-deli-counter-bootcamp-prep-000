///USE ES6!!
function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  for(let i = 0; i < katzDeliLine.length; i++){
    if(katzDeliLine[i] === name){
      return `Welcome, ${katzDeliLine[i]}. You are number ${i + 1} in line.`
    }
  }
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length === 0){
    return "There is nobody waiting to be served!";
  } else {
    const serving = katzDeliLine[0];
    katzDeliLine.shift();
    return `Currently serving ${serving}.`
  }
}

function currentLine(katzDeliLine){
  const array = [];
  if(katzDeliLine.length === 0){
    return "The line is currently empty.";
  } else {
    for(let i = 0; i < katzDeliLine.length; i++){
      array.push(` ${i + 1}. ${katzDeliLine[i]}`);
    }
    return "The line is currently:" + array;
  }
}