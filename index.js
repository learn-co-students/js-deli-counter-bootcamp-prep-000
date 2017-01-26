function takeANumber(line, newCustomer) {
  line.push(newCustomer); //this is a way to add new element to end of array
  return "Welcome, " + newCustomer + ". You are number " + (line.indexOf(newCustomer) + 1).toString() +" in line.";
  //Note that we are fixing the fact that arrays are zero-based here
}

var currentLine =
function(katzDeliLine){
if(katzDeliLine.length ===
0){
return "The line is currently empty."
}
else {
var lineArray = []
for(var i=0; i <
katzDeliLine.length; i++){
lineArray.push(i + 1 +
". " + katzDeliLine[i])
}
return "The line is currently: " + lineArray.join(", ");
}
};

function nowServing(line) {
  if (!line || line.length === 0)
    return "There is nobody waiting to be served!";
  var customerName = line[0];
  line.shift(); //this is a way to remove elements from the beginning of an array
  return "Currently serving " + customerName + ".";
}
