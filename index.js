var katzDeli = [];

function takeANumber(KatzDeliLine,name) {
  KatzDeliLine.push(name);
  var number= KatzDeliLine.length 
  return `Welcome, ${name}. You are number ${number} in line.`
}

function nowServing(KatzDeliLine){
  if (KatzDeliLine.length===0){
    return "There is nobody waiting to be served!"
  }
  else {
    return `Currently serving ${KatzDeliLine.shift()}.`}
}

function currentLine(line){
  if (line.length===0){
    return "The line is currently empty.";
  } 
  else{
    return `The line is currently: 1. ${line[0]}, 2. ${line[1]}, 3. ${line[2]}`
  }
}