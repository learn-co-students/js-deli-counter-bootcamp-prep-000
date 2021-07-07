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
  katzDeliLine.shift()
}
function currentLine (katzDeliLine) {
   if (katzDeliLine[0] === undefined)
   return (`The line is currently empty.`)
   else 
   var line = []
   for  (let i = 0; i < katzDeliLine.length; i++)
   line.push(`${i+1}. ${katzDeliLine[i]}`)
   return (`The line is currently: ${line.join(', ')}`)
}