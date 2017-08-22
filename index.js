function takeANumber(line, name) {
  line.push(name)

  return `Welcome, ${name}. You are number ${line.length} in line.`
}
function nowServing(katzDeliLine) {
  if(katzDeliLine.length < 1) {return 'There is nobody waiting to be served!';}
  else {
    var up = katzDeliLine.shift()
    return `Currently serving ${up}.`
  }
}
function currentLine(katzDeliLine) {
  if(katzDeliLine.length < 1) {return 'The line is currently empty.';}
  else {
    return `The line is currently: 1. ${katzDeliLine[0]}, 2. ${katzDeliLine[1]}, 3. ${katzDeliLine[2]}`;
  }
}
