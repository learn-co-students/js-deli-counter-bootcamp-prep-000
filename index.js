var katzDeliLine = [];
function takeANumber(katzDeliLine,name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(){
  if(katzDeliLine.length !== 0) {
    var name = katzDeliLine[0];
    katzDeliLine = katzDeliLine.shift();
    return `Currently serving ${name}.`;
  }
  else {return "There is nobody waiting to be served!";}
}

function currentLine() {
  if (katzDeliLine !== 0) {
    return `The line is currently: ${Number(katzDeliLine.length - katzDeliLine -1)}.`
  }
}
