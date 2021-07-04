var katzDeliLine =[] ;

function takeANumber(katzDeliLine, customername){
  katzDeliLine.push (customername)
  return `Welcome, ${customername}. You are number ${katzDeliLine.length} in line.`
}
var nowServing = function(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var serving = katzDeliLine[0];
    katzDeliLine.shift();
    return "Currently serving " + serving + ".";
  } else {
    return "There is nobody waiting to be served!"
  }
}
var currentLine = function(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var i = 0
    var line = []
    for (i=0; i < katzDeliLine.length; i++) {
      line.push(` ${i + 1}. ${katzDeliLine[i]}`)
    }
    return `The line is currently:${line}`
  } else {
    return "The line is currently empty."
  }
}
