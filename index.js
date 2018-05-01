var katzDeli = []

var katzDeliLine = []

function takeANumber(katzDeliLine, newName) {

    katzDeliLine.push(newName)
  return (`Welcome, ${newName}. You are number ${katzDeliLine.indexOf(newName)+ 1} in line.`)

}

function nowServing(katzDeliLine){
if (katzDeliLine.length >= 1) {
  const remove = katzDeliLine.shift();
  return ('Currently serving ' + remove +'.')
} else{return ('There is nobody waiting to be served!')}

}
function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return('The line is currently empty.')
  } else{return (`The line is currently: 1. ${katzDeliLine[0]}, 2. ${katzDeliLine[1]}, 3. ${katzDeliLine[2]}`)}

}
