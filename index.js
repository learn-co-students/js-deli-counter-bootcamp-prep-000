function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(deliLine) {
  var nowServing = "";
  if (deliLine.length > 0) {
    nowServing = "Currently serving " + deliLine[0] + ".";
    deliLine.shift();
  } else {
    nowServing = "There is nobody waiting to be served!"
  }
  return nowServing;
}

function currentLine(katzDeliLine){
  var line = "The line is currently:";
  if (katzDeliLine.length > 0) {
    for (var i = 0; i < katzDeliLine.length; i++){
      line = line + " " + (i + 1) + ". " + katzDeliLine[i] + "," 
    }
    line = line.substr(0, line.length - 1);
  } else {
    line = "The line is currently empty.";
  }
  return line;
}

