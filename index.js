function takeANumber(a, name) {
  var line = a.push(name)
  var place = a.length
  return `Welcome, ${name}. You are number ${place} in line.`
}

function nowServing(a) {
  if (a.length === 0){
    return `There is nobody waiting to be served!`
  }
  else {
    return `Currently serving ${a[0]}`
    a.shift()
  }
}

function currentLine(a) {
  if (a.length === 0){
    return `The line is currntly empty`
  }
  else {
    for (let i = 1; i < a.length; i++) {
      return `The line is currently: ${i} ${a[i],}`
    }
  }
}
