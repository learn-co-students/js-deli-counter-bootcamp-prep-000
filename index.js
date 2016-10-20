var katzDeli = [];
var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ` + `${name}` + `. You are number ` + `${katzDeliLine.length}` + ` in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var currentCustomer = katzDeliLine[0];
    katzDeliLine.shift();
    return `Currently serving ` + `${currentCustomer}` + `.`
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(line) {
  //var n = line.length
  var lineCount = "The line is currently: "
  if (line.length > 0) {
    for (var i = 0; i < line.length; i++) {
      if (i < line.length - 1) {
        lineCount += `${i + 1}` + `. ` + `${line[i]}` + `, `
      } else {
        lineCount += `${i + 1}` + `. ` + `${line[i]}`
      }
    }
    //lineCount -= ","
    return lineCount
  } else {
    return "The line is currently empty."
  }
}
