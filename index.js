var katzDeli = [];

function takeANumber(katzDeliLine, entrant) {
  katzDeliLine.push(entrant)
  return `Welcome, ${entrant}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    return `Currently serving ${katzDeliLine.shift()}.`
  }
  
  else {
    return `There is nobody waiting to be served!`
  }

}

    
function currentLine(katzDeliLine) {
  var i=0
  
  if (katzDeliLine.length === 0) {
    return `The line is currently empty.`
  }
  
  else {
    var output = `The line is currently:`
    
    while (i < katzDeliLine.length ) {
      output = output + (i+1) + `. ` + katzDeliLine[i] + `, `
    }
    
    return output.slice(0, output.length-3)
  }
}    