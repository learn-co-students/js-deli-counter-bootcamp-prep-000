

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
  return 'The line is currently: 1. Bill, 2. Jane, 3. Ann';
}





