
function takeANumber(katzDeliLine, name){
  var i = 0
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine){
  var temp = ""
  if(katzDeliLine.length === 0){
    return "There is nobody waiting to be served!"
  }else{
    temp = katzDeliLine[0]
    katzDeliLine.shift()
    return `Currently serving ${temp}.`
  }
}

function currentLine(katzDeliLine){
  var i = 0
  var size = katzDeliLine.length
  var ans = "The line is currently: "

  if(size == 0){
    return "The line is currently empty."
  }
  for(i;i < size; ++i){
    if(i == size - 1){
      ans = ans + `${i + 1}. ${katzDeliLine[i]}`
    }else{
      ans = ans + `${i + 1}. ${katzDeliLine[i]}, `
    }
  }
  return ans
}
