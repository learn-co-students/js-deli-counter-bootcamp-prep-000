/*
  Take an empty array "line" and push the person's
  name to the end of "line". Return a greeting and
  state the person's position in line by using the 
  line.length property.
*/

function takeANumber(line, name) {
  
  line.push(name);
  
  return `Welcome, ${name}. You are number ${line.length} in line.`;
  
}

/*
  Take the array "line" and IF there are elements
  in line, return a string using the first person
  in line (which will always be at index 0.
  Create a variable, "name" to reference the index
  of "line" and use .shift() method to remove the
  first person once they are served.
  IF there are no people in line, return a string
  stating that.
*/

function nowServing(line) {
  
  if (line.length > 0) {
    
    var name = line[0];
    
    line.shift();
    
    return `Currently serving ${name}.`;
    
  }
  
  else {
    
    return "There is nobody waiting to be served!";
    
  }
}

/*
  Test to see if there is no one in line and return
  appropriate string.  Then create an empty array to
  hold both the name and position in line. set 'i' to
  equal the array index and iterate through the line.
  Push "#. Name" to the new array and then use the
  .join() method on the array to separate the values
  with a comma.
*/

function currentLine(line) {
  
  if (line.length === 0) {
    return "The line is currently empty.";
  }
  
  var name_number = [];
  
  for (let i = 0; i < line.length; i++) {
    
    name_number.push(`${i+1}. ${line[i]}`);
    
  }
  
  return `The line is currently: ${name_number.join(", ")}`;

}