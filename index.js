var katzDeli = []; //beginning of day, empty deli, empty array

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  var position = katzDeliLine.length
  return `Welcome, ${name}. You are number ${position} in line.`
};

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return `There is nobody waiting to be served!`
  } else {
    var up = katzDeliLine.shift()
    return `Currently serving ${up}.`
    katzDeliLine.shift()
    }
};

function currentLine(line) {
  if (line.length === 0) {
    return `The line is currently empty.`
  } else {
      var numName = []
      for (var i = 0; i < line.length; i++) {
        numName.push(` ` + `${i + 1}.` + ` ${line[i]}`)
    }
    return `The line is currently:${numName}`
  }
};
