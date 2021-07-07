var katzDeli = [];

function takeANumber(katzDeli, newPerson) {
  katzDeli.push(newPerson)
  return `Welcome, ${newPerson}. You are number ${katzDeli.length} in line.`
}

function nowServing(katzDeli, newPerson) {
  if (katzDeli.length === 0) {
  return "There is nobody waiting to be served!"
  }
  else {
  return `Currently serving ${katzDeli.shift()}.`
  }
}

var array = []

function currentLine(katzDeli) {
  if (katzDeli.length === 0) {
  return "The line is currently empty."
  }

  else {
  let i=0;
  while (i<katzDeli.length) {
    array.push(` ${i+1}. ${katzDeli[i]}`)
    i++
  }
  return "The line is currently:" + array
  }
}
