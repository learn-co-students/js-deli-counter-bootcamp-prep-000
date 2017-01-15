var katzDeliLine = [];

function takeANumber(line, name){
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`;
}

function nowServing(katzDeliLine) {
 if (katzDeliLine.length > 0) {
    return "Currently serving " + katzDeliLine.shift(0) + ".";

} else {
  return "There is nobody waiting to be served!"
}
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var line = []
    var lineL = katzDeliLine.length;
    for (var i = 0; i < lineL; i++) {
     line.push(" " + [i+1] + ". " + katzDeliLine[i])
    }
    return "The line is currently:" + line
  } else {
    return "The line is currently empty."
  }
}
