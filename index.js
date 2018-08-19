var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return (`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`)
}

function nowServing(katzDeliLine, name) {
  var currentName = katzDeliLine.shift();

  if (katzDeliLine.length === 0) {
    return (`There is nobody waiting to be served!`)
  } else {
    return (`Currently serving ${currentName}.`)
  }
}

function currentLine(katzDeliLine) {
var entireList = [];
let i = 0;

while (i < katzDeliLine.length) {
  entireList.push(` `+[i+1]+`. `  + katzDeliLine[i]);
  i++;
}

if (katzDeliLine.length === 0) {
  return "The line is currently empty.";
}

return (`The line is currently:` + entireList);
}
