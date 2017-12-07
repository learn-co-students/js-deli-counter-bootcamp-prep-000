var katzDeliLine = [Steven, Greta]

function takeANumber(katzDeliLine, nPerson) {
  katzDeliLine.push(nPerson)
  return `Welcome, ${nPerson}. You are number ${katzDeliLine.length} in line.`
}
takeANumber(Ada)

function nowServing(katzDeliLine) {
  if (katzDeliLine.length == 0) { return 'There is nobody waiting to be served!'}
  //console.log(`Currently serving ${katzDeliLine.slice(1)}.`)
  return `Currently serving ${katzDeliLine.shift()}.`
}
nowServing()
