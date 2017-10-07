
var katzDeli = []       //create the deli

var katzDeliLine = []   //create the deli line (whats the difference?)



//PART ONE
function takeANumber(queue, name){
  //add the new person to the end of the line
  queue.push(name)
  //get there place in line
  var place = queue.length
  //welcome that person
  return `Welcome, ${name}. You are number ${place} in line.`
}


//PART TWO
function nowServing(queue){
  if(queue.length >= 1){
    var customer = queue[0]
    queue.shift()
    return `Currently serving ${customer}.`
  } else {
    return "There is nobody waiting to be served!"
  }
}


//PART THREE ${i === 0 ? '' : 's'}
function currentLine(queue){
  if(queue.length === 0){
    return "The line is currently empty."
  } else {
    var tally = []
    for(let i = 0; i < queue.length; i++){
      tally[i] = `${i+1}. ${queue[i]}`
    }
    return `The line is currently: ${tally.join(', ')}`
  }
}
