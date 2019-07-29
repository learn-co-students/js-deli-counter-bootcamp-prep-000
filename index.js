//function that a new customer uses when entering the deli

function takeANumber(line, name){
 
  //add the new customer's name to the line, adding to the end of the array and changing it
  
  line.push(name);
  
  //position in line for the new customer is dictated by the indexOf names + 1
   let position = line.indexOf(name) + 1;
  
  //Returns the below string + name and position. NB can improve with ` and $ identifier
 return("Welcome, " + name + ". You are number " + position + " in line.");
 
}

function nowServing(line){
 
 //check if the line has more than 1 person in it
  if (line.length>0) { 
   
   //use .shift to remove the first name of the array. This will mutate. Shortening it. 
    let name = line.shift()
    
  //return string, 'currently serving (customer)' if there is someone waiting to be served
  return("Currently serving " + name + ".");
  }
  
  // else - if there is no customer waiting to be served, print the below
else {
  return ("There is nobody waiting to be served!");
}
  }

//create a function that accepts the current line of people and accepts the current line as a string
function currentLine(line){
  
  //creating a variable which contains an empty array (for people in the line?)
  var katzDeliLine = []

  for (let i = 0; i<line.length; i++) {
      var pos = line.indexOf(line[i])+1
      var t = ' '+pos.toString()+`. ${line[i]}`
      katzDeliLine.push(t)
    }

//if line is 0, return the below string
   if (line.length === 0) {
    return 'The line is currently empty.';
  } 
  
  //or else if the line is busy...
  else {
    var string1 = 'The line is currently:';
    
    //returns string1 + merges the KatzDeliLine array above
    return string1.concat(katzDeliLine);
    }

   }