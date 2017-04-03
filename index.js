var katzDeliLine = [];
var newCustomer = "";

function takeANumber(katzDeliLine,newCustomer){

  katzDeliLine.push(newCustomer);

return console.log("Welcome," + newCustomer + ". You are number " + katzDeliLine.length + "in line.");

} // end of function takeANumber

function nowServing(){

if(katzDeliLine.length < 0){
   return console.log("There is nobody waiting to be served!");
}else {

  return console.log("Currently serving " + katzDeliLine[0] + ".");

  katzDeliLine = katzDeliLine.slice(1);

} // end of if-else statement

} // end of function nowServing

function currentLine(katzDeliLine){

var i = 0;
var lineNumber = (katzDeliLine.index + 1);

return console.log("The line is currently: ");

while (i < katzDeliLine.length){
 return console.log(lineNumber + ". " + katzDeliLine[i] + ", " )
  i ++;
} // end of while loop
} // end of function currentLine
