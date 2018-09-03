function takeANumber(line, person){
  line.push(person)
  return `Welcome, ${person}. You are number ${line.length} in line.`
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length===0){
  return `There is nobody waiting to be served!`
  }
  else {
    return `Currently serving ${katzDeliLine.shift()}.`;
}
}

function currentLine(katzDeliLine){
  var string = "The line is currently: ";
  if (katzDeliLine.length===0){
  return `The line is currently empty.`
  } else {
    var i
    var storage = ""
    for (i=0; i<=katzDeliLine.length-1; i++){
      if((i+1) === katzDeliLine.length) {
        storage = storage + `${i+1}. ${katzDeliLine[i]}`
      } else {
        storage = storage + `${i+1}. ${katzDeliLine[i]}, `
      }
    }
  }
  return string + storage
}

