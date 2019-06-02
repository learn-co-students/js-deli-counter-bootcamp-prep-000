var katzDeliLine = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var status = `Currently serving ${katzDeliLine[0]}.`;
    katzDeliLine.shift();
    return status
    }
  else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length < 1) {
    return "The line is currently empty."
  }
  else {
    var line = "The line is currently: "
    for(var i=0; i<katzDeliLine.length; i++){
      line += (i + 1) + ". " + katzDeliLine[i] + ", "
      }
    return line.slice(0, line.length-2);
  }
}