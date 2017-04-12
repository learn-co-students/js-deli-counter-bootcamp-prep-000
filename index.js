function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  return 'Welcome, ' + name + '. You are number ' + katzDeliLine.length + ' in line.'
}
function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0){
    return  "There is nobody waiting to be served!"
  }
  else {
    return 'Currently serving ' + katzDeliLine.shift() + '.'
  }
}
function currentLine(line){
  if (line.length === 0){
    return  "The line is currently empty."
  }
  else {
    var line2 = []
    line2[0] = (line.indexOf(line[0]) + 1) + '. ' + line[0]
      for (let i = 1; i < line.length; i++){
        line2[i] = ' ' + (line.indexOf(line[i]) + 1) + '. ' + line[i]
      }
    return 'The line is currently: ' + line2
    }

}
