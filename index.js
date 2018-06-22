var marxDeli = []
var line = []

function takeANumber(marxDeli, name) {
  marxDeli.push(`${name}`);
  return(`Welcome, ${name}. You are number ${marxDeli.length} in line.`);
}

function nowServing(marxDeli) {
  var i = 0;
  while (i < marxDeli.length) {
    i++
  }
    if (marxDeli.length === 0) {
      return "There is nobody waiting to be served!"
    }
    else {
      return (`Currently serving ${marxDeli.shift()}.`)
    }
}

function currentLine(marxDeli) {
  for (var i = 0; i < marxDeli.length; i++) {
    line.push(` ${i+1}. ${marxDeli[i]}`)
  }
    if (marxDeli.length === 0) {
      return "The line is currently empty."
    }
    else {

      return (`The line is currently:${line}`)
    }
}
