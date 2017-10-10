var katzDeli = []

function takeANumber(katzDeliLine, customer) {
  katzDeliLine.push(customer)
  return `Welcome, ${customer}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var nextinline = katzDeliLine[0]
    katzDeliLine.shift()
    return `Currently serving ${nextinline}.`
  } else {return "There is nobody waiting to be served!"}
}

function currentLine(katzDeliLine) {
  var result = "The line is currently: "
  if (katzDeliLine.length > 0) {
    for (var i=1; i <katzDeliLine.length+1; i++) {
      result = result + `${i}. ${katzDeliLine[i-1]}, `
    }
    result = result.slice(0, -2)
    return result}  else {return "The line is currently empty."}
}
