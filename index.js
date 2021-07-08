
function takeANumber(katzDeliLine, newName){
  katzDeliLine.push(newName)
  var number = katzDeliLine.indexOf(newName)+1
  return `Welcome, ${newName}. You are number ${number} in line.`

}

function nowServing(katzDeliLine){
  if(katzDeliLine.length === 0){
    return "There is nobody waiting to be served!"
  } else {
    return `Currently serving ${katzDeliLine.shift()}.`
  }
}

function currentLine(katzDeliLine){
  if(katzDeliLine.length === 0){
    return "The line is currently empty."
  } else {
    var str = "The line is currently: "
    var count = 0
    do{
       str = str + (count + 1) + ". " + katzDeliLine[count]+", "
       count += 1
     }while(count< katzDeliLine.length)
  }
  str = str.substring(0, str.length-2)
  return str
}
