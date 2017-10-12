
function takeANumber(katzDeliLine,customer){
     katzDeliLine.push(customer);
     return "Welcome, "+customer+". You are number " +katzDeliLine.length+" in line.";
}

function nowServing(katzDeliLine){
   var first =  katzDeliLine[0];
      katzDeliLine.shift();
   if(katzDeliLine[0]!==undefined){
  return "Currently serving "+first+".";
   }
   else{
     return  "There is nobody waiting to be served!";
   }

}

function currentLine(katzDeliLine){
  var line=[];
  var position=1;
  for(var person in katzDeliLine){
    line.push(position+". "+katzDeliLine[person]);
    position++;
  }
  if(katzDeliLine[0]!==undefined){
    return "The line is currently: " + line.join(", ");
  }
  else{
    return 'The line is currently empty.'
  }
}
