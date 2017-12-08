var katzDeliLine = ['Steven', 'Bill', 'Greta', 'Allen']

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

//var linePosition = []

function currentLine(katzDeliLine) {
  if (katzDeliLine.length == 0)
  {return 'The line is currently empty.'}

var linePosition = []

  for (let i = 0; i < katzDeliLine.length; i++)
    {linePosition.push( ` ${i+1}. ${katzDeliLine[i]}`)}
  return 'The line is currently:' + linePosition
}
currentLine()
