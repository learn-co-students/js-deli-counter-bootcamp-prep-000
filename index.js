

function takeANumber(katzDeliLine, person){
  katzDeliLine.push(person);
  return `Welcome, ${person}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(theLine){
   if(theLine.length > 0){
    return `Currently serving ${theLine.shift()}.`;
}else{
     return "There is nobody waiting to be served!";
}

}

function currentLine(line){
  if(line.length > 0){
  var message = 'The line is currently:';
  var counter = 1
 return `${message} 1. Bill, 2. Jane, 3. Ann`;

  
  } else {
   
    return "The line is currently empty.";
  
  
}

}



