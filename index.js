var katzDeli = []

function takeANumber(katzDeli, person) {
  katzDeli.push(person)
  return `Welcome, ${person}. You are number ${katzDeli.length} in line.`
}

function nowServing(katzDeli) {
  if (katzDeli.length < 1) {
    return "There is nobody waiting to be served!"
  }
  else {
    let current = katzDeli[0]
    katzDeli.shift()
    return `Currently serving ${current}.`
  }
}

function currentLine(katzDeli) {
  var line = []
	if (katzDeli.length < 1) {
		return "The line is currently empty."
	}
  else {
    for (let i = 0; i < katzDeli.length; i++) {
      if (i == 0) {
        line.push(`The line is currently: 1. ${katzDeli[0]}`)
      }
      if (i > 0) {
        line.push(` ${i + 1}. ${katzDeli[i]}`)
      }
    }
    return `${line}`
  }
}
