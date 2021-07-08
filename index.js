var KatzDeli = [];

function takeANumber(line, newperson) {
  line.push(newperson)
  return `Welcome, ${newperson}. You are number ${line.length} in line.`
}

function nowServing(line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    return `Currently serving ${line.shift()}.`
  }
}

function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty."
  } else {
    var str = `The line is currently:`
    for (var i = 0; i<line.length-1;i++) {
      str = str + ` ${i+1}. ${line[i]},`
    }
    str = str + ` ${line.length}. ${line[line.length-1]}`
    return str
  }

}
