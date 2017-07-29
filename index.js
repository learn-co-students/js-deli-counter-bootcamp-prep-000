var katzDeli= [];

function takeANumber(katzDeliLine, name) {
    katzDeliLine.push(name);
    return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(lineUp) {
  if (lineUp.length === 0) {
    return ("There is nobody waiting to be served!");
  } else {
    return (`Currently serving ${lineUp.shift()}.`)
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return ("The line is currently empty.")
  } else {
    var i = 0;
      while(i < katzDeliLine.length) {
        katzDeliLine[i] = `${i+1}. ${katzDeliLine[i]}` // "The line is currently: 1. Bill 2. Jane 3. Ann"
        i++
    }
    return `The line is currently: ${katzDeliLine.join(", ")}`
  }
}
