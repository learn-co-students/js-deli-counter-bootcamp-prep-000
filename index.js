function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeli){
  if(katzDeli.length == 0){
    return "There is nobody waiting to be served!"
  }
  else{
    return `Currently serving ${katzDeli.shift()}.`
  }
}

function currentLine(katzDeli){
  var line = 'The line is currently: '
  if(katzDeli.length == 0){
    return "The line is currently empty."
  }
  else{
    for(var i = 1; i <= katzDeli.length; i++ ){
      if(i == katzDeli.length){
        line += i + ". " + katzDeli[i-1]
      }
      else{
        line += i + ". " + katzDeli[i-1] + ", "
      }
    }
    return line
  }
}