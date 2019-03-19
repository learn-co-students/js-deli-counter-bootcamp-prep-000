var katzDeliLine = [];

function takeANumber(currentLine, name) {
  currentLine.push(name);
  let place = currentLine.length;
  console.log (place);
  return `Welcome, ${name}. You are number ${place} in line.`;
}


function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    let name = katzDeliLine[0];
    katzDeliLine.shift();

    return `Currently serving ${name}.`
}
  else{
    return "There is nobody waiting to be served!"
}
}

function currentLine(line){
  if (line.length === 0){
    return "The line is currently empty."
  }
}
