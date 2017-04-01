var katzDeli = [];
function takeANumber(katzDeliLine, newName){
  katzDeliLine.push(newName);
  return `Welcome, ${newName}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length > 0){
    return `Currently serving ${katzDeliLine.shift()}.`
  }else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine){
  var t = 1;
  for (var i = 0; i < katzDeliLine.length; i++){
    katzDeli[i] = ` ${t}. ${katzDeliLine[i]}`

    t++
  }
  if (katzDeliLine.length > 0){
    return `The line is currently:${katzDeli}`
  }else {
    return "The line is currently empty."
  }
}
