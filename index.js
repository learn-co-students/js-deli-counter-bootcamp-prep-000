function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if(katzDeliLine.length === 0) {
    return 'There is nobody waiting to be served!'
  } else {
    var customer = katzDeliLine.shift();
    return `Currently serving ${customer}.`;
  }
}

function currentLine(line) {
  if(line.length === 0) {
    return 'The line is currently empty.'
  } else {
      var string = `The line is currently: `;
      for(var i = 0; i < line.length; i++) {
        string += `${i+1}. ${line[i]}, `;
      }
    return string.slice(0, string.length-2)
  }
}
