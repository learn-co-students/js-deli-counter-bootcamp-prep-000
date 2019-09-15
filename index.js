var katzDeliLine = [];
function takeANumber(katzDeliLine,name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}
function nowServing(katzDeliLine) {
  if (!katzDeliLine.length) { return `There is nobody waiting to be served!`; }
  else {
    name = katzDeliLine[0];
    katzDeliLine.shift();
    return `Currently serving ${name}.`;
  }
}
function currentLine(katzDeliLine) {
  const line = []
  if (!katzDeliLine.length) { return `The line is currently empty.`; }
  else {
    for (var i = 0; i < katzDeliLine.length; i++) {
    line.push(`${i+1}. ${katzDeliLine[i]}`)
  }
  return `The line is currently: ${line.join(', ')}`
}
}
