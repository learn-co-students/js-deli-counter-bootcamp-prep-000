var katzDeliLine = []
function takeANumber(array, person){
  array.push(person)
  var spotInLine = parseInt(array.indexOf(person))
  return (`Welcome, ${person}. You are number ${spotInLine+1} in line.`)
}
function nowServing(array){
  var customer = array.shift()
  if (array.length > 0){
    //console.log(`Currently serving ${array[0]}`)
    return (`Currently serving ${customer}.`)
  }
  else{
    return ("There is nobody waiting to be served!")
  }
}
function currentLine(array){
  if (array.length === 0){
    return "The line is currently empty."
  }
  var peopleInLine = []
  for (let i = 0; i < array.length; i++ ){
    peopleInLine.push(`${i+1}. ${array[i]}`)
  }
  return `The line is currently: ${peopleInLine.join(`, `)}`
  /*else{
    for (var i = 0; i < 1; i++){
      return ("The line is currently: "+`${i+1}. ${array[i]},`+` ${i+2}. ${array[i+1]},`+` ${i+3}. ${array[i+2]}`)
    }
  }*/
}
