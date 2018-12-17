
function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}


function nowServing(katzDeliLine) {
  katzDeliLine.shift(// how to return now serving message with name?)
  // if / else statement; if katzDeliLine === 0 return message
}
