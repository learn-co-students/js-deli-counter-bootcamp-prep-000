var katzDeliLine = []

var takeANumber = function(line, name) {
  line.push(name)
  let n = line.length
  return(`Welcome, ${name}. You are number ${n} in line.`)
}

var nowServing = function(line) {
  if (line.length==0) {
    return "There is nobody waiting to be served!"
  } else {
    let f = line[0]
    line.shift()
    return `Currently serving ${f}.`
  }
}

var currentLine = function(line) {
  if (line.length==0) {
    return "The line is currently empty."
  } else {
    var announcement = []
    for (var i=1; i<=line.length; i++) {
      announcement[i-1] = ` ${i}. ${line[i-1]}`
    }
    return `The line is currently:${announcement}`
  }
}
