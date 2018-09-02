
function takeANumber (deli, name) {
  deli.push(name)
  return `Welcome, ${name}. You are number ${deli.length} in line.`
}

function nowServing(deli) {
  if (deli.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    var name = deli.shift()
    return `Currently serving ${name}.`
  }
}

function currentLine(deli) {
  var lines = "The line is currently"
  if (deli.length === 0) {
    lines = lines + " empty."
  } else {
    lines = lines + ":"
    for (var i = 0; i < deli.length; i++) {
      lines = `${lines} ${i+1}. ${deli[i]}${i < deli.length-1 ? ',' : ''}`
    }
  }
  return lines;
}