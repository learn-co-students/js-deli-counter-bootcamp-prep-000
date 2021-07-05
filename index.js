var katzDeli = [];

function takeANumber(katzDeli,name) {
 katzDeli.push(name)
 return `Welcome, ${name}. You are number ${katzDeli.length} in line.`
}

function nowServing(katzDeli, name) {
  var first = katzDeli.shift()
  if(katzDeli.length >= 1 ) {
    return `Currently serving ${first}.`
  } else {
    return `There is nobody waiting to be served!`
  }
}

function currentLine(katzDeli) {
  if(katzDeli.length >= 1) {
    return `The line is currently: 1. ${katzDeli[0]}, 2. ${katzDeli[1]}, 3. ${katzDeli[2]}`
  } else {
    return `The line is currently empty.`
  }
}
