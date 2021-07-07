var katzDeli = []

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  katzDeli = ("Welcome, " + (name) + ". You are number " + (katzDeliLine.length) + " in line.")
  return katzDeli
}

var line = []

function nowServing(katzDeli) {
   let i = 0;
   while (i < katzDeli.length) {
     i++;
   }
   if (katzDeli.length === 0) {
     return "There is nobody waiting to be served!";
   }
   else
   return (`Currently serving ${katzDeli.shift()}.`);
}

function currentLine(katzDeline) {
   for (let i = 0; i < katzDeline.length; i++) {
     line.push(" " +[i+1]+". "+ katzDeline[i])
   }
   if (katzDeline.length===0){
     return "The line is currently empty.";
     }
   else{
 return ("The line is currently:"+ line);
}}