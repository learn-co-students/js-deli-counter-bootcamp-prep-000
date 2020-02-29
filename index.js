// function that receives 2 parameters (katzDeliLine- the array[] and person- the new person being added)
function takeANumber(katzDeliLine, person){
  // take katzDeliLine array and .push() the 'person' parameter to the array 
  katzDeliLine.push(person);
  // now return the concatenated string of 'person' along with the length of the katzDeliLine array[]
  return("Welcome, " + person + ". You are number " + katzDeliLine.length + " in line.")
}

// function receiving the parameter 'katzDeliLine'
function nowServing(katzDeliLine){
  // if katzDeliLine is empty, return the statement
  if(katzDeliLine.length===0){
    return "There is nobody waiting to be served!"
  }
  // if it is not empty, we need to establish a different string to return 
  // assign the 'next' variable to be katzDeliLine minus one string  
  var next = katzDeliLine.shift();
  // now we return the 'next' variable in the concatenated sentence 
  return("Currently serving " + next + ".")
}

// function currentLine to return the entirety of the currentLine. accepts 'line' as param 
function currentLine(line){
  // see if the length of the line array is 0
  if(line.length === 0){
    // if it is zero return this message: 
    return "The line is currently empty."
  }
  // make new variable to merge information 
  var lineMerge = [];
  // setup the increment 'i' for loop
  for (var i = 0; i<line.length; i++){
    // push() a combination of increasing 'i', a dot, and the line[i]
    lineMerge.push(i + 1 + ". " + line[i])
  }
  // now return the new lineMerge array that we created earlier. 
  // this one took a while. turns out .join() is the only way to accomplish this combination
  return "The line is currently: " + lineMerge.join(", "); 
}