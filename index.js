function takeANumber(katzDeli, name) {
  katzDeli.push(`${name}`);
  return `Welcome, ${name}. You are number ${katzDeli.length} in line.`
}

function nowServing(katzDeli) {
  if (katzDeli.length>0) {
    return `Currently serving ${katzDeli.shift()}.`
  }
  else {
    return 'There is nobody waiting to be served!'
  }
}

function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty."
  }
  else {
    var current = [];
    for (let i = 0; i < line.length; i++) {
      current.push(` ` + [i+1]+`. ` + line[i]);
    }
    return (`The line is currently:` + current);
  }
}
