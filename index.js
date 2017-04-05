var katzDeli = [];
var katzDeliLine = [];
var otherDeli = ["Steven", "Blake", "Avi"];
var newCustomer = "";
var line = ['Bill','Jane','Ann'];

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

}else {

  return "Currently serving " + otherDeli[0] + ".";

  otherDeli.shift();

  return otherDeli;

} // end of if-else statement

} // end of function nowServing

function currentLine(line){
var i = 0;
var lineNumber = (line.index + 1);

if (line.length == 0) {

  return "The line is currently empty."

}else {return "The line is currently: "

while (i < line.length){

 return lineNumber + ". " + line[i] + ", ";
  i ++;
} // end of while loop
} // end of else statment
} // end of function currentLine
