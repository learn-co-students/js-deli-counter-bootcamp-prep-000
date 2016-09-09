var katzDeli = [];

function takeANumber(katzDeli, name) {
  katzDeli.push(name)
  return `Welcome, ${name}. You are number ${katzDeli.indexOf(name) + 1} in line.`
}

function nowServing(katzDeli) {
  if (katzDeli.length === 0) {
    return "There is nobody waiting to be served!"

  }
  else {
    var oo = katzDeli[0]
    katzDeli.shift()
    return `Currently serving ${oo}.`
  }
}

function currentLine(katzDeli) {
  var i = 0
  var oo = []
  if (katzDeli.length === 0) {
    return "The line is currently empty."
  }
  else {
    while (i < katzDeli.length) {
      oo.push(`${i + 1}. ${katzDeli[i]}` )
      i += 1
    }
  }
  return `The line is currently: ${oo.join(", ")}`
}
