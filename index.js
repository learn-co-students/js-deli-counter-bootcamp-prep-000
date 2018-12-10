function takeANumber(currentLine, name){
  currentLine.push(name);
  let place = currentLine.indexOf(name) + 1
  return `Welcome ${name}, you are number ${place} in line.`
}