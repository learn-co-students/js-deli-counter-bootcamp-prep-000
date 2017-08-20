function takeANumber(katzDeliLine, person) {
  katzDeliLine.push(person)
  return `Welcome, ${person}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  var person = katzDeliLine[0]
  if(katzDeliLine.length > 0) {
    katzDeliLine.shift()
    return `Currently serving ${person}.`
  }
  else {
    return 'There is nobody waiting to be served!'
  }
}

function currentLine(katzDeliLine) {
  var state = 'The line is currently'
  var size = katzDeliLine.length
  if(size > 0) {
    state += ':'
    for(let i = 0; i < size; ++i) {
      state = state + ' ' + (i+1) + '. ' + katzDeliLine[i] + ','
    }
    state = state.substr(0, state.length-1) //remove last comma
  }
  else {
    state += ' empty.'
  }
  return state
}
