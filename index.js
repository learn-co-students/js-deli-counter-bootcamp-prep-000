function takeANumber(katzDeliLine, personName){
  katzDeliLine.push(personName);
  return `Welcome, ${personName}. You are number ${katzDeliLine.length} in line.`
 }
 function nowServing(katzDeliLine){
   if (katzDeliLine.length === 0){
     return 'There is nobody waiting to be served!'
   } else {
     return `Currently serving ${katzDeliLine.shift()}.`
   }
 }
function currentLine(katzDeliLine){
   if (katzDeliLine.length === 0){
     return 'The line is currently empty.';
   } else {
     var message = `The line is currently:`;
     for (let i = 0; i < katzDeliLine.length; i++ ){
        message = message + ` ${i+1}. ${katzDeliLine[i]},`;
     }
   }
   message = message.substring(0,message.length-1)
   return  message
 }