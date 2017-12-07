var katzDeliLine = []

function takeANumber(katzDeliLine, nPerson) {
  katzDeliLine.push(nPerson)
  return "Welcome $[nPerson]. You are the $[katzDeliLine.length]."
}
takeANumber(Ada)
