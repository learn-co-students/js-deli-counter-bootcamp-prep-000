var katzDeli = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length === 0){
    return "There is nobody waiting to be served!";
  } else {
    var currentlyServing = katzDeliLine.shift();
    return `Currently serving ${currentlyServing}.`
  }

}


function currentLine(katzDeliLine){
   if(katzDeliLine.length === 0){
     return "The line is currently empty.";
   } else {
     var result = "The line is currently: ";
     for (var i = 0; i < katzDeliLine.length; i++) {
       result += `${i+1}. ${katzDeliLine[i]}`;
       if(i < katzDeliLine.length - 1){
         result += ", ";
       }
     }
     return result;
   }
}
