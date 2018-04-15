var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {

katzDeliLine.push(`${name}`);

return (`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`);
}

function nowServing(katzDeliLine) {
  if(katzDeliLine.length > 0) {
    return(`Currently serving ${katzDeliLine.shift()}.`);
  }
    else{
      return("There is nobody waiting to be served!");
    }
}

function currentLine(katzDeliLine) {

 let i = 0
 if(i < katzDeliLine.length) {
   return(`The line is currently: ${i+1}. ${katzDeliLine[i]}, ${i+2}. ${katzDeliLine[i+1]}, ${i+3}. ${katzDeliLine[i+2]}`);
 }
   else{
     return("The line is currently empty.")
   }
}