// Adds a new customer (variable name: newName) to the end of the deli line (variable name: currentLine).
function takeANumber(currentLine, newName) {
  
  // Appends new customer's name to the end of the deli line.
  currentLine.push(newName);
  
  // Returns "Welcome (insert new customer name here). You are number (insert the length of the deli line, which is the customer's place in line behind everyone in front of them) in line.".
  return `Welcome, ${newName}. You are number ${currentLine.length} in line.`;
}



// Accepts the current line of people (variable name: currentLine), returns the first person in line and removes the first person from the line.
// If there is no one in line, returns "There is nobody waiting to be served".
function nowServing(currentLine) {
  
  // Checks to see if there is no one line line. If this is true and there is no one in line, returns the string "There is nobody waiting to be served!".
  if (currentLine.length === 0) {
    return "There is nobody waiting to be served!";
  } 
  
  // Otherwise, if there are people in line, removes the first person in the line and returns the first person that was removed, inserting it into the string below as a variable.
  // Will also notify the customer that was just removed from the line that they are currently being served, by returning the string "Currently serving (insert removed customer's name here).".
  else {
    return `Currently serving ${currentLine.shift()}.`;
  }
}



// Accepts the current line of people (variable name: currentLine), and returns the current line as a string so customers can see everyone who is in line before and after them.
function currentLine(currentLine) {
  
  // Initialization and declaration of variables.
  var i;
  // ans is initialized and assigned with "The line is currently: " and customer numbers and names will be appended to the end of this string.
  var ans = "The line is currently: ";
  
  // If there is no one in line, returns the string "The line is currently empty".
  if (currentLine.length === 0) {
    return `The line is currently empty.`;
  } 
  
  // Otherwise, loop through the currentLine array, append the customer's number in line to the end of the ans array and then append the customer's name to the end of the ans array, in chronological order of who is first in line.
  else {
    
    // Loops through the currentLine array with a for loop
    for (i = 0; i < currentLine.length; i++) {
      
        // Appends the customer's number (i/index + 1) to the end of the ans array, appends a period and a space ". " after the customer's number and appends the customer's name to the end of the ans array.
        ans = ans.concat(`${i + 1}. ${currentLine[i]}`);
        
        // If i/index of currentLine is not the last item, append a comma and a space ", " to the end of the ans array.
        if (i < currentLine.length - 1) {
          ans = ans.concat(`, `);
        }
      }
  }
  
  // Returns the ans array.
  return ans;
}