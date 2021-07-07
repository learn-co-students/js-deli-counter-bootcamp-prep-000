var katzDeliLine = [];
function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
    //adds the person's name to the deli line array
    return "Welcome, " + name + ". You are number " + katzDeliLine.length +" in line."
  }
//returns the person's name with their place in line
function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
  return "There is nobody waiting to be served!"
  } else {
    var firstPerson = [];
    firstPerson = katzDeliLine.shift(0);
    return "Currently serving " + firstPerson + ".";
  }
}
function currentLine(katzDeliLine) {
    if (katzDeliLine.length === 0) {
      return "The line is currently empty.";
     }
    var line = [];
      for (var i = 0; i < katzDeliLine.length; i++) {
        line.push(i+1 + ". " + katzDeliLine[i]) }
        return "The line is currently: " + line.join(", ");
    }
