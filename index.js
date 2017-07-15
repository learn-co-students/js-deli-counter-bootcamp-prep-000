var takeANumber = (katzDeliLine, newPerson) => {
  katzDeliLine.push(newPerson);
  return `Welcome, ${newPerson}. You are number ${katzDeliLine.length} in line.`
}

var nowServing = (katzDeliLine) => {
  return katzDeliLine.length===0? "There is nobody waiting to be served!" : `Currently serving ${katzDeliLine.shift()}.`;
}

var number = (katzDeliLine) => {
  for (var i=0; i<katzDeliLine.length; i++){
    return `${i+1}. ${katzDeliLine[i]}`
  }
}

var currentLine = (katzDeliLine) => {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  } else {
    var string = "The line is currently: "
    for (var i = 0; i < katzDeliLine.length; i++) {
      string = string.concat(`${i+1}. ${katzDeliLine[i]}`)
      if (i < katzDeliLine.length - 1) {
        string = string.concat(", ")
      }
    }
  }
  return string
}
