function takeANumber (katzDeliLine,name) {
  var n = parseInt(katzDeliLine.length + 1)
  katzDeliLine.push(name)
  return (`Welcome, ${name}. You are number ${n} in line.`)
}
function nowServing(katzDeliLine) {
  if (katzDeliLine[0] === undefined)
  return (`There is nobody waiting to be served!`)
  else
  return (`Currently serving ${katzDeliLine.shift()}.`)
 
}