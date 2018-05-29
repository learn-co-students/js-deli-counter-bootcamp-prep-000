var katzDeli = [];

function takeANumber(katzDeliLine, Name){
 katzDeliLine.push(Name);
 var numberInLine = katzDeliLine.length;
 return "Welcome, " + Name + ". You are number " + numberInLine + " in line.";
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0){
    return "There is nobody waiting to be served!"
  }
  else{
    var person = katzDeliLine.shift();
    return "Currently serving " + person + ".";
   }
}

function currentLine(line){
  if(!line.length){
    return "The line is currently empty."
  }
  
  else{
    var numbersAndNames = [];
    for(let i = 0; i < line.length; i++){
      numbersAndNames.push(i+1 + ". "+ line[i]);
    }
    
    return "The line is currently: " + numbersAndNames.join(', ')
  }
}

