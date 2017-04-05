var katzDeli = [];
var katzDeliLine = [];
var newCustomer = "";

function takeANumber(katzDeliLine, newCustomer){

if(katzDeliLine.length == 0){
    katzDeliLine[0] = newCustomer;
}else {
  katzDeliLine.push(newCustomer);
}

return "Welcome, " + newCustomer + ". You are number " + katzDeliLine.length + " in line.";

} // end of function takeANumber


function nowServing(katzDeliLine){

if(katzDeliLine.length == 0){

   return "There is nobody waiting to be served!";
}else {

  return "Currently serving " + katzDeliLine[0] + ".";

  katzDeliLine = katzDeliLine.slice(1);

} // end of if-else statement

} // end of function nowServing

function currentLine(katzDeliLine){
var i = 0;
var lineNumber = (katzDeliLine.index + 1);

if (katzDeliLine.length == 0) {

  return "The line is currently empty."

}else {return "The line is currently: ";

while (i < katzDeliLine.length){

 return lineNumber + ". " + katzDeliLine[i] + ", ";
  i ++;
} // end of while loop
} // end of else statment
} // end of function currentLine
