// function takeANumber(currentLine,newCustomerName){
//   var welcomeMessage = [];
//   for (var i = 0; i<currentLine.length; i++){
//     welcomeMessage.push("Welcome," + newCustomerName[i] + "You are number" +currentLine[i] + "in line");
//   }
//   return welcomeMessage;
// }

function takeANumber(currentLine, newCustomerName) {
  currentLine.push(newCustomerName);
  
  // return "Welcome, " + newCustomerName + ". You are number " + currentLine.length + " in line."

  return `Welcome, ${newCustomerName}. You are number ${currentLine.length} in line.`;
}


// function nowServing(katzDeliLine){
// var i = 0;
// if (i<katzDeliLine.length){
//   return "Currently serving "+ katzDeliLine.shift() + ".; // } else {
//   return "There is nobody waiting to be served!"
// }// }


function nowServing(katzDeliLine){
var i = 0;

if (i==katzDeliLine.length){
  return "There is nobody waiting to be served!"
} else {
  return "Currently serving "+ katzDeliLine.shift() + "."; 
  }
}


function currentLine(line){
  var i = 0;
  
 if (i<line.length){
    return "The line is currently: "+ "1. " + line[0] + ", 2. " + line[1] +", 3. " + line[2]; 
  }
  else{
    return "The line is currently empty.";
  }
  
}







