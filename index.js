
function takeANumber (katzDeliLine, name){
  katzDeliLine.push(name);
  var welcome = `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
  return welcome;
}

function nowServing (katzDeliLine){
 var length = katzDeliLine.length;
 var noOne = "There is nobody waiting to be served!";
  if (length === 0){
    return noOne;
   } else while (length > 0){
    var message= `Currently serving ${katzDeliLine[0]}.`;
    katzDeliLine.shift(1);
    length--;
    return message;
  } return noOne;
}

function currentLine (katzDeliLine){
  var length = katzDeliLine.length;
  var currentLine = [];
   if (length === 0){
    currentLine = "The line is currently empty."
    return currentLine;
    } else {
      for (let i=0; i < length; i++){
          currentLine[i]= ` ${i+1}. ${katzDeliLine[i]}`; 
      } return `The line is currently:${currentLine.toString()}`;
    } 
}
    
  
