var katzDeliLine =[];
function takeANumber(katzDeliLine, person){
  katzDeliLine.push(person);
  var placeInLine = katzDeliLine.length
  return `Welcome, ${person}. You are number ${placeInLine} in line.`
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length > 0) {
    var personServing = katzDeliLine.shift(0);
    return `Currently serving ${personServing}.`;
  }else{
    return "There is nobody waiting to be served!"
  }
}

function currentLine(line) {
  var returnString = ""
  if (line.length > 0) {
     returnString = "The line is currently: "
    for (var i = 0; i < line.length; i++){
      var pos = i + 1
      if (i < line.length - 1){
      returnString = returnString + `${pos}. ${line[i]}, `
    }else{
      returnString = returnString + `${pos}. ${line[i]}`
    }
  }
  }else{
    return "The line is currently empty."
  }
  return returnString
}
