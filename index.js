var katzDeli = []

function takeANumber(katzDeli, name) {
  katzDeli.push(name)
  return `Welcome, ${name}. You are number ${katzDeli.length} in line.`
}

function nowServing(katzDeli) {
  if (katzDeli.length > 0) {
    return `Currently serving ${katzDeli.shift()}.`
  } else {
    return "There is nobody waiting to be served!"
  }
  katzDeli.shift()
}

function currentLine(katzDeli) {
  if (!katzDeli.length) {
    return "The line is currently empty."
  }

  var numName = []

  for (let i = 0, l = katzDeli.length; i < l; i++) {
    numName.push(`${i + 1}. ${katzDeli[i]}`)
  }
  return `The line is currently: ${numName.join(', ')}`
  
}
