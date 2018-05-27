

function takeANumber(katzDeliLine, newPerson){
  katzDeliLine.push(newPerson)
  var position = katzDeliLine.length
  return `Welcome, ${newPerson}. You are number ${position} in line.`
  
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0){
    return "There is nobody waiting to be served!"
  }else{
    var firstPerson = katzDeliLine[0]
    katzDeliLine.shift()
    return `Currently serving ${firstPerson}.`
  }
  
}

function currentLine(katzDeliLine){
  if (katzDeliLine.length === 0){
    return "The line is currently empty."
  }else{
    var currentStr = "The line is currently: "
    var addedStr = "" //to be added to curentStr per for loop iteration
    var position = 0  //stores position of a person for addedStr
    var linePerson = "" //stores name of person for addedStr
    
    
    for (var i=0; i<katzDeliLine.length; i++){
      position = i+1
      linePerson = katzDeliLine[i]
      
      //prepare the string to add to currentStr
      if (i === katzDeliLine.length - 1){
        addedStr = `${position}. ${linePerson}`
      }else{
        addedStr = `${position}. ${linePerson}, `
      }
      
      currentStr += addedStr
    }
    return currentStr
  }
}


