//create function takeANumber with argument line and name, to say hello you x number
function takeANumber(line, name){
//adjust the line variable array by pushing name into the array
  line.push(name);
// return the welcome message for each person in x postion in line.
  return `Welcome, ${name}. You are number ${line.length} in line.`;
}
//create function with argument line in line
function nowServing(line){
  //if there is no one one in line return nobody
  if (!line.length) {
    return "There is nobody waiting to be served!";
  }
  // if there are people in line include who is being served by line.shift by pulling the first person in line off the line
  // we want this to be destruction and change the line array because the person has been served
  return `Currently serving ${line.shift()}.`;
}

function currentLine(line){
  //if there is no one one in line return nobody
  if (!line.length) {
    return "The line is currently empty.";
  }
  // create the line array
  const theLine = [];
// start the for loop at 0, as long as people in line run the loop
 for (let i = 0, l = line.length; i < l; i++) {
   //Add number push 1, because 1st in line is not 0, then execute the current person in line for i value
   theLine.push(`${i + 1}. ${line[i]}`);
 }
// return the line number value and person, then add a comma and repeat
 return `The line is currently: ${theLine.join(', ')}`
};
