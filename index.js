var katzDeli = [];

  function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  return (`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`)
}

function nowServing(first){
  if (!first.length){
  return ('There is nobody waiting to be served!')}
  else {
    return (`Currently serving ${first.shift()}.`)
  }
}

function currentLine(line){
  if (!line.length){
    return ('The line is currently empty.')
  }
  const numberAndName = []
  for (let i = 0, l = line.length; i < l; i++) {
    numberAndName.push(`${i + 1}. ${line[i]}`)
  }
  return (`The line is currently: ${numberAndName.join(', ')}`)
}
