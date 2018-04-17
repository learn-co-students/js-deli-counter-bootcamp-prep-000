var katzDeliLine = []

function takeANumber(katzDeliLine, newName) {
  katzDeliLine.push(newName)
  var index = katzDeliLine.indexOf(newName)
  return `Welcome, ${newName}. You are number ${index} in line.`
}