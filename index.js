function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  for (let i = 0; i < katzDeliLine.length; i++) {
    if (katzDeliLine[i]===name) {
      var number = Number(i) + 1;
      return "Welcome, " + name + "." + " You are number " + number + " in line.";}
  }
}
function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {return "Currently serving " +  katzDeliLine.shift() + ".";}
  else {return "There is nobody waiting to be served!";}
}
function currentLine(katzDeliLine) {
    if (katzDeliLine.length === 0) {
      return "The line is currently empty.";}
      else{
      var line[];
      for (let i = 0; i < katzDeliLine.length; i++) {
        line.push(' ' + [i+1] + '.' + katzDeliLine[i]);
      }
      return "The line is currently: " + line.join(',');
      }
}