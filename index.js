
function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  var p = katzDeliLine.length
  return `Welcome, ${name}. You are number ${p} in line.`
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length == 0){
    return "There is nobody waiting to be served!"
  }else{
    var savedName = katzDeliLine[0]
    katzDeliLine.shift()
    return `Currently serving ${savedName}.`
  }
}

function currentLine (katzDeliLine) {
    if(katzDeliLine.length == 0){
        return "The line is currently empty."
    }else{
        var message = "The line is currently: "
        for(var i=0; i<katzDeliLine.length; i++){
          message += `${i+1}. ${katzDeliLine[i]}`
          if(i <katzDeliLine.length-1 ){
            message += ', '
          }
        }
        return message
    }
}