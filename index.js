var katzDeli = []; // beginning of the day when line is empty

function takeANumber(katzDeliLine, name){ //accepts the current line of people
    katzDeliLine.push(name); //adds name to the end of the array
    return "Welcome, ${name},  You are number ${katzDeliLine.length} in line."
};

function nowServing(array) { //should return the first person in line and then remove that individual from line
  if(array.length > 1){
    return "Currently serving ${line.shift()}." //returns the removed element. In this case it would be the person being served
  } else {
    return "There is nobody waiting to be served!" //if no one is in line
  }
};

function currentLine(array){ //returns the current line.
  if (array.length > 1) {  //.length returns the number of characters left in a string
    for
  }

const numbersAndNames =[]

  for (let i=0, i < array.length; i++) { // for loop
    array[i] = ' ${i + 1}. ' + array[i];
  }

return "the line is currently: ${array}"; //joins all elements of the array into a string
} else return "The line is currently empty."; // if no one is in line
}
