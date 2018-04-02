var KatzDeli = []

var takeANumber = (katzDeliLine, name) => {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

var nowServing = katzDeliLine => {
  if (katzDeliLine.length > 0) {
    var firstPerson = katzDeliLine.slice(0,1)
    katzDeliLine.shift()
    return `Currently serving ${firstPerson}.`
  } else {
    return "There is nobody waiting to be served!"
  }

}

var currentLine = katzDeliLine => {
  if (katzDeliLine.length > 0) {
    var string = "The line is currently:"

    for (var i = 0; i < katzDeliLine.length; i++) {
      string = string.concat(` ${i + 1}. ${katzDeliLine[i]},`)
    }

    return string.slice(0, string.length - 1)

  } else {
    return "The line is currently empty."
  }
}
