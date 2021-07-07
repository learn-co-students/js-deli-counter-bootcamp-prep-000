function takeANumber(katzDeliLine, newName) {
  katzDeliLine.push(`${newName}`);
  return(`Welcome, ${newName}. You are number ${katzDeliLine.length} in line.`);
}

function nowServing(katzDeliLine) {
  let i = 0;
  while(i < katzDeliLine.length) {
    i++;
  }
  if (katzDeliLine.length === 0) {
    return ("There is nobody waiting to be served!");
  } else {
    return (`Currently serving ${katzDeliLine.shift()}.`);
  }
}

var line = []
function currentLine(katzDeliLine) {
  for(var i = 0; i < katzDeliLine.length; i++) {
    line.push(` `+[i+1]+`. ` + katzDeliLine[i]);
  }
  if(i === 0) {
    return("The line is currently empty.")
  } else {
    return(`The line is currently:` + line)
  }
}