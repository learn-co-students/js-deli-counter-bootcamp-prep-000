  /*add element to an array. create a new variable to store the new value. 
  then use length property to add 1 and return the string with the name. */

function takeANumber(katzDeliLine, name) {
  
  var position = katzDeliLine.length + 1;
  katzDeliLine.push(name);
  
    return "Welcome, " + name + ". You are number " + position + " in line.";
}

/*  Us an IF statement to tell the function when to say "Currently serving". 
Then a template literal to say who, is now the first name by using the index number. 
Then AFTER that, subtract the first person using .shift
  THEN the return, otherwise it will stop running.  */

function nowServing (katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var announcement = `Currently serving ${katzDeliLine[0]}.`;
    
    katzDeliLine.shift();
  
    return announcement;
    
  } else {
    
      return "There is nobody waiting to be served!";

  }
}

/*  Make a variable to store the empty array.
  IF statement to tell it when to to return. 
  Then the FOR loop to iterate through the array, and return the message.
  Use the PUSH method to add the name and number to the new array.
  use a templ. literal to get the names and numbers into the statement
  use the JOIN method to complete the sentence the way that it appears in the tests, with the commas.

*/

function currentLine (katzDeliLine) {
  
  var line = [];

  if (katzDeliLine.length > 0) {

    for (var i = 0; i < katzDeliLine.length; i++) {
      line.push(`${i + 1}. ${katzDeliLine[i]}`);
    }

    return 'The line is currently: ' + line.join(", ");
    
  } else {
    
    return "The line is currently empty.";
  }
}