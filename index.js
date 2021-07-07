
var currPeople = [];
function takeANumber (currPeople, newPerson) {
    currPeople.push (newPerson);
    var deli=("Welcome, " + newPerson + ". You are number "+ currPeople.length + " in line.");
    return deli;
}


var katzDeliLine = [];
function nowServing (katzDeliLine) {
  if (katzDeliLine.length === 0) {
    var line=("There is nobody waiting to be served!");
    return line
  } else {
    var line1=("Currently serving " + katzDeliLine[0] + ".")
    katzDeliLine.shift ();
    return line1
  }
}

var OldLine = [];
function currentLine (OldLine) {
  if (OldLine.length===0) {
    var line2=("The line is currently empty.")
    return line2
  } else {
     var i=0;
     var a=1;
       while (a<=OldLine.length) {
         var line3=("The line is currently: " + a + ". " + OldLine[i] + ",")
       }
      return line3; 
  }
}


