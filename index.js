const katzDeli = []

function takeANumber(katzDeli, name) {
    katzDeli.push(name)
    return `Welcome, ${name}. You are number ${katzDeli.length} in line.`
}

function nowServing(katzDeli) {
  if (katzDeli.length > 0)
  return `Currently serving ${katzDeli.shift()}.`
  else
  return "There is nobody waiting to be served!"}

function currentLine(line) {
  var numbers = []
  if (line.length === 0){
    return "The line is currently empty."
  }
  else {
    for (var i = 0; i < line.length; i++) {
      // 1. John
      numbers.push(`${i+1}. ${line[i]}`)
    }
    // "The line is currently: 1. Bill, 2. Jane, 3. Ann"
    return `The line is currently: ${numbers.join(', ')}`
  }

}
