var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return (`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`)
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    var name = katzDeliLine.shift();
    return (`Currently serving ${name}.`)
  }
}

function currentLine(people) {
  var line = ""
    if (people.length === 0) {
      return (`The line is currently empty.`)
    } else {
      for(var i = 0; i < people.length; i++) {
        line += `${i + 1}. ${people[i]}, `
      }
      line = line.slice(0, line.length - 2)
      return (`The line is currently: ${line}`)
    }
}
