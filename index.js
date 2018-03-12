//Empty array
var katzDeliLine = [];

//Function will take a new person into the line and add them to an array, then return their name and position in line
function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)

  return (`Welcome, ${name}. You are number ${katzDeliLine.indexOf(name) + 1} in line.`)
}


//Function to return first person in Line, then remove that person. If noone in line return "There is nobody waiting to be served!"
function nowServing(katzDeliLine) {

  if (katzDeliLine.length == 0 || katzDeliLine == null) {
    return ("There is nobody waiting to be served!");
  }
  else {
      return (`Currently serving ${katzDeliLine.splice(0, 1)}.`);
  }
}

//Function to return current line. "The line is currently: 1. Ada, 2. Grace"
function currentLine(katzDeliLine) {
  var x;

  if (katzDeliLine.length == 0 || katzDeliLine == null) {
    return("The line is currently empty.");
  }
  else {
    var text = [];

      for (x = 0; x < katzDeliLine.length; x++) {
            text.push(` ${x + 1}. ${katzDeliLine[x]}`);

          }
        }

  return "The line is currently:" + text.join(",");
}
