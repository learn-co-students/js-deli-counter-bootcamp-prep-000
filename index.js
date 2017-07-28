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
    var b = a[0]
    a.splice(0,1)
    return `Currently serving ${b}.`
  }
}

function currentLine(a) {
  if (a.length === 0){
    return `The line is currently empty.`
  }
  else {
    var b = []
    for (let i = 0; i < a.length; i++) {
       b.push(`${i+1}. ${a[i]}`)
       var c = b.join(", ")
    }
    return `The line is currently: ${c}`
  }
}
