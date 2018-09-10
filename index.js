//add two parameters to function to update names in line
function takeANumber(line, name){ 

//adds name to line and returns new line length 
  line.push(name);

//adds return greeting using line length to determine number in line
  return `Welcome, ${name}. You are number ${line.length} in line.`;
}

// adds one parameter to function to represent the currentName in line
function nowServing(currentName) {

//test to whether array of names is greater than zero (people in line)
  if (currentName.length === 0) { 
  
   // first return if array is empty  
  return "There is nobody waiting to be served!"; 
  } 
  else {
    
    // return first name of line if array is not empty then take name out of array
    return `Currently serving ${currentName.shift()}.`;
    }
  }
  
  // adds one parameter to a function to to establish the current line list 
function currentLine(mondayRush){
  
 //test to whether array of names is greater than zero (people in line) - similar to currentName
  if (mondayRush.length === 0) { 
  
   // first return if array is empty  
  return "The line is currently empty."; 
  } else {
    
    var arr = []; // creates new arr to store list
    
    for (var i = 0; i < mondayRush.length; i++) //loops til reaches end of array
    {
      arr.push(`${ i + 1 }. ${ mondayRush[i] }`); // pushes to array new pattern that creates ordered list
    }
    
    return `The line is currently: ${ arr.join(", ") }`; // used array join method to combine array into list with a "," and space. Return must be outside of loop or will break immediately.
  }
}

  
