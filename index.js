var katzDeli=[];

/*Add name to the array and return size of array (number of elements)*/
function takeANumber(katzDeliLine,name){
  return "Welcome, " + name + ". You are number " +katzDeliLine.push(name) + " in line."
}

/*Retun next person in line and update array(removes serving person)*/
function nowServing(katzDeliLine){
  if (katzDeliLine.length > 0){
    return "Currently serving " + katzDeliLine.shift() + "."
  }
  else{
    return "There is nobody waiting to be served!"
  }
}

/*Returns the Next in line as a string
function currentLine(katzDeliLine){
 if (katzDeliLine.length === 0) {
   return "The line is currently empty."
 }
 else {
   var line=""
    for (var i = 0; i < katzDeliLine.length; i++){
      if (i === 0) {
        line = "The line is currently: " + (i + 1) +". " + katzDeliLine[i]}
      else {
        line = line + ", " + (i + 1) + ". " + katzDeliLine[i]}
    }
    return line
  }
}*/

/*/*Returns the Next in line as a array with join, refactored from above */
function currentLine(KatzDeliLine){
    if (katzDeliLine.length ===0){
        return "The line is currently empty."
    }
    var line=[]
    for (i = 0; i < katzDeliLine.length; i++){
        line.push(`${i + 1}.${katzDeliLine[i]}`)}
    return `The line is currently: ${line.join(', ')}`
}
