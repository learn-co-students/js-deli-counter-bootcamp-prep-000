function takeANumber(katzDeliLine, name){

    katzDeliLine.push(name)



return (`Welcome, ${name}. You are number 1 in line.`)
}

function takeANumber(otherDeli, name){
  otherDeli.push(name)
  return(`Welcome, ${name}. You are number ${otherDeli.length} in line.`)
}

function nowServing(deliLine, name){
  var i = 0
  if ( i < deliLine.length){
    return (`Currently serving ${deliLine.shift(name)}.`)


}else{
  return ("There is nobody waiting to be served!")

}
}

function currentLine(katzDeliLine, name){
  var i = 0
  if ( i < katzDeliLine.length){
    return (`The line is currently: 1. ${katzDeliLine.shift(name)}, 2. ${katzDeliLine.shift(name)}, 3. ${katzDeliLine.shift(name)}`)
  }else{
    return ("The line is currently empty.")
  }
}
