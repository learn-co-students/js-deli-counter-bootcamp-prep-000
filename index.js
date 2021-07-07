


function takeANumber(katzDeliLine, name) {
  
  katzDeliLine.push(`${name}`) 
  
   return(`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`);
}

function nowServing(katzDeliLine) {
  
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  }else{
  return (`Currently serving ${katzDeliLine.shift()}.`); }
}


function currentLine (katzDeliLine) {
  var newArray = [];
  var i= 0 ;
  
  while (i<katzDeliLine.length) {
  
  newArray.push(parseInt(i+1) + ". " + katzDeliLine[i++])
    
  }
  
  if (i===0) {
    
  return "The line is currently empty." }
  
  else  
  
  return "The line is currently: " + newArray.join(", ")}
  

  