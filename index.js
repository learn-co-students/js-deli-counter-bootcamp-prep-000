function takeANumber( katzDeliLine, name ) {
  katzDeliLine.push(name)
  var num = katzDeliLine.length
  return `Welcome, ${name}. You are number ${num} in line.`
}

function nowServing() {
  if( katzDeliLine === 0 ) {
    return "There is nobody waiting to be served!"
  } else {
    return `Now serving ${katzDeliLine[0]}`
  }
  katzDeliLine.shift()
}
