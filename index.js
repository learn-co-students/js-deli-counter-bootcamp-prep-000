var katzDeli = [];
var katzDeliLine = [];
var otherDeli = ["Steven", "Blake", "Avi"];
var newCustomer = "";
var line = ["Bill","Jane","Ann"];

function takeANumber(katzDeliLine, newCustomer){

if(katzDeliLine.length == 0){
    katzDeliLine[0] = newCustomer;
}else {
  katzDeliLine.push(newCustomer);
}

return "Welcome, " + newCustomer + ". You are number " + katzDeliLine.length + " in line.";

} // end of function takeANumber


function nowServing(otherDeli){

if(otherDeli.length == 0){

   return "There is nobody waiting to be served!";

} else {
  var currentName = otherDeli[0];

  otherDeli = otherDeli.shift();

  return "Currently serving " + currentName + ".";

} // end of if-else statement

} // end of function nowServing

function currentLine(line){
var newline = [];

if (line.length == 0) {

  return "The line is currently empty."

}else {

    for (var i = 0; i < line.length; i++){

      var lineNumber = (i + 1);

      newline.push(" "+ lineNumber + ". " + line[i]);

    } // end of for loop

    return "The line is currently:" + newline;

} // end of else statment
} // end of function currentLine
