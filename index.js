function takeANumber (people, name){
  people.push(name)
  return `Welcome, ${name}. You are number ${people.length} in line.`
}

function nowServing (people){
  if(people.length !== 0){
    return `Currently serving ${people.shift()}.` 
  } else {
    return "There is nobody waiting to be served!"
  }

}

function currentLine(people){
  var returnLine = 'The line is currently: '
  if (people.length !== 0 ){
    for (let i = 0; i < people.length; i++){
      returnLine += `${i+1}. ${people[i]}`
      if ( i != people.length -1 ){
        returnLine += ', '
      }
    }
    return returnLine
  } else {
    return "The line is currently empty."
  }
  
}