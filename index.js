function takeANumber(katzDeliLine, newPerson) {
  katzDeliLine.push(newPerson);
  return (`Welcome, ${newPerson}. You are number ${katzDeliLine.indexOf(newPerson) + 1} in line.`);
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return (`There is nobody waiting to be served!`)
} else {
  var newPerson = katzDeliLine[0]
  katzDeliLine.shift()
  return (`Currently serving ${newPerson}.`)
}
}

  function currentLine(katzDeliLine) {
    if (katzDeliLine.length === 0) {
    return `The line is currently empty.`
    } else {
    for (var i = 0; i <= katzDeliLine.length -1; i++) {
      katzDeliLine[i] = `${i + 1}. ` + katzDeliLine[i]
      var katzJoin = katzDeliLine.join(`, `)
    }
    return `The line is currently: ${katzJoin}`
    }
  }
