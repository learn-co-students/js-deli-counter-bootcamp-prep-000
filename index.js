var katzDeliLine = []

function takeANumber(katzDeliLine,name){
  katzDeliLine.push(name)
  return 'Welcome, ' + name + '. You are number ' + katzDeliLine.length + ' in line.'
}
function nowServing(name) {
  if (name.length===0) {
    return "There is nobody waiting to be served!"
  }
 else {
 return `Currently serving ${name.shift()}.`}
  }
function currentLine(line){
  if (line.length ===0) {
    return "The line is currently empty."
  }
  const fullLine = []
  for (let i = 0; line.length > i; i++) {
    
    fullLine.push(`${i+1}. ${line[i]}`) }
    return `The line is currently: ${fullLine.join(', ')}`
  
}