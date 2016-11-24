var takeANumber = (xs, x) => {
  xs.push(x)
  return `Welcome, ${x}. You are number ${xs.indexOf(x) + 1} in line.`
}

var nowServing = (xs) => {
  if(xs.length == 0)
    return 'There is nobody waiting to be served!'

  var x = xs.shift()
  return `Currently serving ${x}.`
}

var currentLine = (xs) => {
  if(xs.length == 0)
    return 'The line is currently empty.'

  return xs
    .reduce( (xs, x, y) => xs += ` ${y + 1}. ${x},`,'The line is currently:')
    .slice(0, -1)
}
