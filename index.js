//Declare the variable for the line
var katzDeli;

//Function that returns a welcome message including the new persons name and the person's position in line.
function takeANumber(katzDeli, name){
  
  //push name of customer to end of array
  katzDeli.push(name);
  return ("Welcome, " + name + ". You are number " + katzDeli.length + " in line." );
}

//Function that updates the current line of people
function nowServing(katzDeli){
  
  //If statement in case there is no people in line
  if (!katzDeli.length){
    return ("There is nobody waiting to be served!");
  }
  else {
    return "Currently serving " + katzDeli.shift() + ".";
  }
}

//Function that accepts current amount of people in line and the person's place in line.
function currentLine(katzDeli){
  
  //If statement in case no one is in line.
  if (!katzDeli.length) {
    return "The line is currently empty.";
  }
  
  //line array created to store and display the amount of people in line and the persons place in line.
  var line = [];
  for ( var i = 0; i < katzDeli.length; i++){
    line.push( i + 1 + ". " + katzDeli[i]);
  }
  return "The line is currently: " + line.join(', ');
  
}