function takeANumber(katzDeli, name) {
  katzDeli.push(name)
  return 'Welcome, ' + name + '. You are number ' + katzDeli.length + ' in line.'
}

function nowServing(deliLine) {
  if (deliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    return "Currently serving " + deliLine.shift() + "."
  }
}

function currentLine(line){
  var array = ["The line is currently:"]
  if (line.length === 0) {
    return ("The line is currently empty.")
  }
  for (let i = 0; i < line.length; i++) {
    var string = (i +1) + ". " + line[i] + ","
    array.push(string)
  }
  return array.join(" ").slice(0, -1)
}
