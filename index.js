var katzDeliLine = []

function takeANumber(katzDeliLine, nPerson) {
  katzDeliLine.push(nPerson)
  return `Welcome, ${nPerson}. You are number ${katzDeliLine.length} in line.`
}
takeANumber(Ada)

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) { 'The line is currently empty.'}
  else {katzDeliLine.slice(0,1)}
  katzDeliLine.shift
}
nowServing()
