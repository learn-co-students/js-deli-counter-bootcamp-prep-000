var katzDeliLine = []

function takeANumber(deliLine, name) {
  deliLine.push(name);
  const placeInLine = deliLine.length;
  return `Welcome, ${name}. You are number ${placeInLine} in line.`
}

function nowServing(deliLine) {
  if (!deliLine.length) {
    return "There is nobody waiting to be served!"
  } 
  const serving = deliLine[0]
  deliLine.shift()
  return `Currently serving ${serving}.`
}

function currentLine(line) {
  if (!line.length) {
    return "The line is currently empty."
  } 
  const placesAndPeopleString = line.map(function(name, index){
    return `${index +1}. ${name}`
  }).join(', ')

  return `The line is currently: ${placesAndPeopleString}`
}