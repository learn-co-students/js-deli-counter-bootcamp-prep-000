var katzDeli = [];

function takeANumber(katzDeli, name) {
  katzDeli.push(name);
  var nameIndex = katzDeli.indexOf(name) + 1
  //return `Welcome, ${name}. You are number ` + nameIndex + ` in line.`
  return `Welcome, ${name}. You are number ${katzDeli.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var first = katzDeliLine[0]
    katzDeliLine.splice(0, 1)
    return `Currently serving ${first}.`
  }
  else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var line = [];
    for (var i = 0; i < katzDeliLine.length; i++) {
      line.push(`${i+1}. ${katzDeliLine[i]}`)
    var newNames = line.join(', ')
    }
    return "The line is currently: " + newNames
  }
  else {
    return "The line is currently empty."
  }
}
