function takeANumber (current, name) {
  var len = current.length
  var pos = current.length + 1
  current[len] = name;
  return `Welcome, ` + name + `. You are number ` + pos + ` in line.`
}
function nowServing (katzDeliLine) {
  var name = katzDeliLine[0]; 
  var len = katzDeliLine.length - 1
  var i;
  if (katzDeliLine.length == 0) {
    return "There is nobody waiting to be served!"
  } else {
    katzDeliLine.shift()
  }
  return `Currently serving ${name}.`
}

function currentLine(line) {
  if (line.length == 0) {
    var str = `The line is currently empty.`
  }
  else { 
    var str = `The line is currently: `
    var i;
    for (i=0; i<line.length; i++) {
      var num = parseInt(i)+1;
      str += `${num}. ${line[i]}`
      if (i != line.length - 1) {
        str += `, `
      }
    }
  }
  return str
}