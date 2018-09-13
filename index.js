function takeANumber(katzDeli, name) {
    katzDeli.push(name)
  return ("Welcome, "+ name +". You are number "+(katzDeli.length)+" in line.")
}
function nowServing(katzDeliLine) {
  let i = 0
 if (i < katzDeliLine.length) {
   return ("Currently serving "+(katzDeliLine.shift(name))+".")
 } else {
   return ("There is nobody waiting to be served!")
 }}
 function currentLine(line) {
  let deliLine = []
  for (let i=0; i < line.length; i++) {
    deliLine.push(" "+(i+1)+". "+line[i])
   } 
   if(line.length > 0) {
      return ("The line is currently:"+deliLine)
   }
      return ("The line is currently empty.")
   }