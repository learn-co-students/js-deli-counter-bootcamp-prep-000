var katzDeliLine = [];

// take a number accepts deli array and name then adds name to array then it would
// find out how many people are in the array
// return that string back

function takeANumber(katzDeliLine, newName){
  katzDeliLine.push(newName);
  var position=  katzDeliLine.length;
  return `Welcome, ${newName}. You are number ${position} in line.`;
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length > 0){
    var firstPerson= katzDeliLine.shift();
    return `Currently serving ${firstPerson}.`
  }else{
    return "There is nobody waiting to be served!"
  }
}

/* if someone in the line,
returns the current line as a string with the name variables and the numbers inside
if no one in line, return another string
*/

// "The line is currently: Position. Name, Position2, name2.
// make the first of the string a variable.
// variable which is string, variable is position, nams

function currentLine(katzDeliLine){
  if (katzDeliLine.length === 0){
    return "The line is currently empty."
  } else {
    var stringNeeded= "The line is currently: " //+ first count, add more to the end
    for (var count = 0; count < katzDeliLine.length; count++){
      stringNeeded = stringNeeded + (count + 1) + ". " + katzDeliLine[count] + ", "
  }
    var properString= stringNeeded.slice(0, (stringNeeded.length-2));
    return properString;
  }
}
