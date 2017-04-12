var katzDeliLine = [];

function takeANumber(katzDeliLine, name){
katzDeliLine.push(name);
return (`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`);
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0){
  return ("There is nobody waiting to be served!");
} else {
  var newline = katzDeliLine.shift()
  console.log(katzDeliLine)
  return (`Currently serving ${newline}.`);
  }
}

function currentLine(katzDeliLine){
  var newline = []
  if (katzDeliLine.length === 0){
  return ("The line is currently empty.");
} else {
  for (var i=katzDeliLine; i<0;i--){
    newline.unshift(`${i}.${katzDeliLine.shift()}`)
  }
    return `The line is currently: ${newline}`
  }
}
