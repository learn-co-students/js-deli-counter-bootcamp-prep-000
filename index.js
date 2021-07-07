function takeANumber(line,name) {
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(katzDeliLine) {
  var nextUp = katzDeliLine.shift()
  if ( nextUp === undefined ) {
    return "There is nobody waiting to be served!"}
  else { return `Currently serving ${nextUp}.`}
  
}

function currentLine(line) {
  
  if ( line.length === 0 ) { return "The line is currently empty."}
  else {
  var i = 0
  var output = ""
  while ( i < line.length - 1 ){
    output = output + `${i + 1}. ${line[i]}, ` 
    i++
  }
  output = output + `${i + 1}. ${line[i]}`
  return `The line is currently: ${output}`
}
}