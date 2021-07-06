//build a function "takeANumber" that takes in  the current line of people along with the new person's name. The function return a welcome message including the position in line "Welcome, [name]. You are number [array.length] in line"

function takeANumber(deliLine,newPerson){
  deliLine.push(newPerson)
  return "Welcome, "+newPerson+". You are number "+(deliLine.length)+" in line."
}

//build a function nowServing. This function should accept the currentl ine of people (katzDeliLine) and return the first person in line, and then remove that individual from the line. If there nis nobody in line, it should return "There is nobody waiting to be served!"

function nowServing(deliLine){
  if(deliLine.length !== 0){
    var nextPerson = deliLine.shift()
    return "Currently serving "+ nextPerson +"."
  }
  else{
    return "There is nobody waiting to be served!"
  }
  return returnString 
}

//build a function currentLine(line). If the line is empty, return "The line is currently empty"; if there are pople in line return "The line is currently: [#]. [line[i]],... etc.
function currentLine(deliLine){
  var textReturn = 'The line is currently'
  if(deliLine.length === 0){
    textReturn = textReturn + ' empty.'
  }
  else {
    textReturn = textReturn + ': '
    for (let i=0;i<deliLine.length;i++){
      textReturn = textReturn + (i+1) + '. ' + deliLine[i]
      if (i!==deliLine.length-1) {
        textReturn = textReturn + ', '
      }
    }
  }
  return textReturn
}
