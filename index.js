function takeANumber(people, name) {
   people.push(name)
  return 'Welcome, ' + name + '. You are number ' + people.length + ' in line.'
}


function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  }
  
else {
   var frontOfTheLine = katzDeliLine[0]
   katzDeliLine.shift()
   return 'Currently serving ' + frontOfTheLine + '.'
  }
/*
  katzDeliLine[0]
  katzDeliLine.unshift()
  return "There is nobody waiting to be served!"
  */
}

function currentLine(people){
  if (people.length == 0) {
    return "The line is currently empty." 
  }
  else {
    var result = 'The line is currently: ' 
    for(var i = 0; i < people.length ;i++) {
     result += (i+1)
     result += '. '
     result += people[i]
     result += ', '
    }
    result = result.substring(0, result.length - 2)
    return result 
    
  }
  
}