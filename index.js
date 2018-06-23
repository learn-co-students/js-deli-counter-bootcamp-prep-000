var katzDeli = [];

function takeANumber (katzDeli, name) {
  katzDeli.push(name)
  return `Welcome, ${name}. You are number ${katzDeli.length} in line.`
}

function nowServing (katzDeli) {
  if (katzDeli.length == 0) {
    return "There is nobody waiting to be served!"
  } else {
    return `Currently serving ${katzDeli.shift()}.`
  }
}

function currentLine (katzDeli) {
  if (katzDeli.length > 0) {
    var out = 'The line is currently: ';
    for (let i = 0; i < katzDeli.length; i++) {
      out += `${i+1}. ${katzDeli[i]}`
      if (i < katzDeli.length-1) {
        out += ', '
      }
    }
    return out
  } else {
    return "The line is currently empty."
  }

}
