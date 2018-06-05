var katzDeliLine = [];

function takeANumber(katzDeliLine, customer) {
  katzDeliLine.push(customer);
  return `Welcome, ${customer}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var firstInLine = katzDeliLine.shift()
      return `Currently serving ${firstInLine}.`
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine) {
  var newKatzDeliLine = []
    if (katzDeliLine.length >=1) {
      newKatzDeliLine.unshift(`The line is currently: 1. ${katzDeliLine[0]}`)
      for (let i = 1; i < katzDeliLine.length; i++) {
        newKatzDeliLine.push(` ${i + 1}. ${katzDeliLine[i]}`)
        }
    } else {
      newKatzDeliLine.unshift('The line is currently empty.')
    }
  return newKatzDeliLine.join()
}

/* function currentLine(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var s = "The line is currently:"
    var line = ''
    
    for ( var i = 0; i < katzDeliLine.length; ++i) {
      line = line + ` ${i+1}. ` + `${katzDeliLine[i]}` + `${i < katzDeliLine.length - 1 ? ',' : ''}` 
    }
    
    return s + line;
    
  } else {
    return "The line is currently empty."
  }
} */