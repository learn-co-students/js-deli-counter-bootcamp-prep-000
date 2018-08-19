function takeANumber(katzDeliLine, name) {
  var num = katzDeliLine.length + 1
  return `Welcome, ${name}. You are number ${num} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    return katzDeliLine[0]
  }
}