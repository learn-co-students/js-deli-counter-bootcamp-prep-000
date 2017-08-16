//var katzDeliLine = [];

function takeANumber(line, name) {
  line.push(name);
  var index = line.indexOf(name) +1;
  return (`Welcome, ${name}. You are number ${index} in line.`)
}

function nowServing(line) {
  if (line.length > 0) {
    var customer = line[0];
    line.shift()
    return (`Currently serving ${customer}.`)
  }
  else {
    return ('There is nobody waiting to be served!')
  }
}

function currentLine (line) {
  if (line.length > 0) {
    let i = 0;
    while (i < line.length) {
      line[i] = `${i+1}. ${line[i]}`
      i++
    }
    return (`The line is currently: ${line.join(`, `)}`)
  }

  else {
    return ("The line is currently empty.")
  }
}
