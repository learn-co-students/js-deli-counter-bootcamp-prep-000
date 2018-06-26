
function takeANumber(katzDeliLine, newPerson) {
  katzDeliLine.push(newPerson)
  return `Welcome, ${newPerson}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length > 0) {
    let currentlyServe = katzDeliLine.shift()
  return `Currently serving ${currentlyServe}.`
  }
  else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine){
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  }
  let queueNumber = katzDeliLine.length
  let line = "The line is currently: "
  for (let i = 0; i < katzDeliLine.length; i++) {
    // we are building a long string
    //i = 0, 0 < 1, i = i +1
    //i =1, 1 < 1, false 
    
    //line = line + i + 1 + ". " e.g. 1 + Ada
    
     line += (i + 1) + ". " + katzDeliLine[i]
     
     //
     //i is the iterator going through the array
    // if i = 0, queueNumber = 1, 0 < 0 = false, don't add the comma.

     
     if (i < queueNumber - 1) {
       //use zero based indexing
       //if the array length is greater than is
       // add a comma, if not, break out
       //if we aren't looking at last person, add //a comma
      // e.g with 2 people, 1 < 2 -1 
       line += ", "
     }
  }
  return line; 
}