var katzDeli = []

function takeANumber(line, newCust) {
  line.push(newCust)
  return `Welcome, ${newCust}. You are number ${line.length} in line.`
}

function nowServing(line) {
  if(line.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    var cust = line[0];
    line.shift();
    return `Currently serving ${cust}.`;
  }
}

function currentLine(line) {
  if(line.length === 0) {
    return "The line is currently empty."
  } else {
    var result = "The line is currently:"
    for(var i = 0; i < line.length; i++) {
      result += ` ${i + 1}. ${line[i]}`
      if (i < line.length - 1) {
        result += ","
      }
    }
  }

  return result
}
