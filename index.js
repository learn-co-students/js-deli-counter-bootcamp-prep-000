function takeANumber(line, newPerson) {
  
  line.push(newPerson);
  
  return `Welcome, ${newPerson}. You are number ${line.length} in line.`
}
  
function nowServing(line) {
  
  var nextInLine = line.shift();
  if (line.length === 0) {
    return "There is nobody waiting to be served!";
  }
  return `Currently serving ${nextInLine}.`;
}

function currentLine(line) {
    
   var number = line.length;
   // accepts the current line of people
   var newArray = [];
    if  (line.length === 0){
        return "The line is currently empty.";
    }
    else {
       for (var i = 0; i < number; i++){
         var placeInLine = i+1;
         newArray.push(" " +placeInLine + ". "+line[i]);
       }
  }
  return "The line is currently:" + newArray;
  // returns the current line as a string
}