function takeANumber (line, newCustomer) {
  line.push(newCustomer)
  return (`Welcome, ${newCustomer}. You are number ${line.length} in line.`)
}
function nowServing(line) {
  if (line.length === 0) {
    return ("There is nobody waiting to be served!") 
  }
  else {
    var next = line[0]
    line.shift()
  }
  return `Currently serving ${next}.`
}
function currentLine(line) {
  var numberedLine = []
  if (line.length === 0) {
    return ("The line is currently empty.") 
  }
  else {
  //  var numberedLine = []
    for (let i = 0; i < line.length; i++) {
    //numberedLine.push(i+1 + ". " + line[i])
      if (i === 0) {
        numberedLine.push(`${i+1}. ${line[i]}`)
        }
      else {
        numberedLine.push(` ${i+1}. ${line[i]}`)
      }
    }
  }
      return (`The line is currently: ${numberedLine}`)
}