var katzDeliLine = [];


function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  var n = katzDeliLine.length;
  return `Welcome, ${name}. You are number ${n} in line.`
}

function nowServing(DeliLine) {
  if (DeliLine.length >= 1) {
    return `Currently serving ${DeliLine.shift()}.`;
}
  else {return 'There is nobody waiting to be served!'}
}

function currentLine(line) {
  var lineNames = []
  var l = line.length
  var a = 0
  if (l != 0) {
    while (l != a)
    {lineNames[a] = ` ${a + 1}. ${line[a]}`;
    a++}
    return `The line is currently:${lineNames}`
  } else {
    return 'The line is currently empty.'
}
}
