function takeANumber(linePeople, personName){
  linePeople.push(personName)
  return "Welcome, " + personName + ". You are number " + linePeople.length + " in line."
}
 function nowServing(currentLine){
  if (currentLine.length > 0){
    return "Currently serving " + currentLine.shift() + "."
  }
  else{
    return "There is nobody waiting to be served!"
  }
}
 function currentLine(array){
    if (array.length > 0){
      var firstPart = "The line is currently: "
      for (var i=0; i < array.length; i++){
        if ([i] < array.length - 1){
          firstPart += [i+1] + ". " + array[i] + ", "
        }
        else{
          firstPart += [i+1] + ". " + array[i]
        }
      }
      return firstPart
    }
    else{
      return "The line is currently empty."
    }
  }
