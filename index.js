var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return (`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`)
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    return (`Currently serving ${katzDeliLine.shift()}.`) // can also use .splice(0, 1)
  } else {
    return ("There is nobody waiting to be served!")
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var line = [];
    for (let i = 0; i < katzDeliLine.length; i++) { // take note of the end value here a.k.a the use of '<' 
      line.push(`${i + 1}. ${katzDeliLine[i]}`)
    }
    return (`The line is currently: ${line.join(", ")}`) // .join to join all elements of an array into a string 
  } else {
    return ("The line is currently empty.")
  }
}