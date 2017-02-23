function takeANumber(line, name){ //accepts the current line of people
    line.push(name); //adds name to the end of the array
    return "Welcome, ${name},  You are number ${line.length} in line."
};

function nowServing(line) { //should return the first person in line and then remove that individual from line
  if(!line.length){
    return "There is nobody waiting to be served!" //if no one is in line
  }
  return "Currently serving ${line.shift()}." //returns the removed element. In this case it would be the person being served
};

function currentLine(line){ //returns the current line.
  if (!line.length) {  //.length returns the number of characters left in a string
    return "The line is currently empty." // if no one is in line
  }

const numbersAndNames =[]

  for (let i=0, l=line.length; i,l; i++){ // for loop
    numbersAndNames.push("${i+1}, ${line[i]}")
  }

return "the line is currently : ${numbersAndNames.join(", ")}" //joins all elements of the array into a string
};
