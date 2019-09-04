var katzDeliLine = []
var otherDeli = ["Steven", "Blake", "Avi"];

function takeANumber(katzDeliLine,Ada) {
    katzDeliLine.push ( Ada );
 return `Welcome, ${Ada}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(DeliLine) {
  if (DeliLine.length > 0 ) {
  return `Currently serving ${DeliLine.shift()}.`;
} else {
  return "There is nobody waiting to be served!"
}
}

function currentLine(line) {
  if (line.length === 0) {
    return `The line is currently empty.`
  }
  else {
    var newArray=[];
    for (var i = 0; i < line.length; i++) {
      newArray.push(`${i + 1}. ${line[i]}`)
    } return `The line is currently: ${newArray.join(", ")}`
  }
}
