function takeANumber (katzDeliLine, personName) {
    katzDeliLine.push(`${personName}`);
    return (`Welcome, ${personName}. You are number ${katzDeliLine.length} in line.`)
  }

function nowServing (katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return ("There is nobody waiting to be served!");
  }
  else {
  return (`Currently serving ${katzDeliLine.shift()}.`)  
  }
}

var list = []
function currentLine (katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return ("The line is currently empty.");
  }
  else {
    let i = 0;
    while (i < katzDeliLine.length) {
      list.push(` ` + [i+1] + `. ` + katzDeliLine[i])
      i++
    }
    return (`The line is currently:` + list)
  }
}