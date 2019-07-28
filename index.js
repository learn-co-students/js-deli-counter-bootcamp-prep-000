function takeANumber(current,name){
  current.push(name)
  return `Welcome, ${name}. You are number ${current.length} in line.`
}
function nowServing(katzDeliLine){
  var count = 0
  while(count < katzDeliLine.length){
    count++
  }
  if(katzDeliLine.length === 0){
    return "There is nobody waiting to be served!"
  }
  else
  return `Currently serving ${katzDeliLine.shift()}.`
}
function currentLine(katzDeliLine){
  var count = 0
  var line = []
  while(count < katzDeliLine.length){
   
    line.push(` ` + [count+1] + `.` + ` `+  katzDeliLine[count])
    count++
  }
   if(katzDeliLine.length === 0){
      return `The line is currently empty.`
    }
    else
    return `The line is currently:` + line
    
}
