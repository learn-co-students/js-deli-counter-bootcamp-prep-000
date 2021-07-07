function takeANumber(currentLine, newPerson) {
  currentLine.push(newPerson);
  var person = currentLine.length;
  var welcome = `Welcome, ${newPerson}. You are number ${person} in line.`;
  return welcome;
}
function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    return "Currently serving " + katzDeliLine.shift() + ".";
  } return "There is nobody waiting to be served!";  
}

function currentLine(line) {
   var empty = "The line is currently: ";
   var people = 0;
   if (line.length > 0) {
     while (line.length > people) {
       empty = empty + `${people + 1}. ` + line[people] + ", ";
       people++;
     } return empty.slice(0, empty.length - 2)
  } else return "The line is currently empty."

}
