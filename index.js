function takeANumber(katzDeliLine, newName){
  var katzDeliLine=[]
  katzDeliLine.pop(newName)
  return(`Welcome, ${newName}. You are number ${katzDeliLine.length + 1} in line.`)
}
