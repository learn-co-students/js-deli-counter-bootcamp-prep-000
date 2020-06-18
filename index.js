

/*function takeANumber(katzDeli, newCustomerName){
 katzDeli.push(newCustomerName);
 newCustomerName = 'Ada';
   
  for (let i = 1; i < katzDeli.length; ++i){
  
  return `Welcome, ${newCustomerName}. You are number   ${i} in line.`;
  }
}*/

function takeANumber(katzDeliLine, name){
    katzDeliLine.push(name);
    return  `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}





/*function nowServing(katzDeliLine){
  if(deliLine.length > 0){
    return "Currently serving " + deliLine.shift() + ".";
  } else {
    
    return "There is nobody waiting to be served!";
    }
  }*/
  
  

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    return "Currently serving " + katzDeliLine.shift() + ".";
  } else {
      return "There is nobody waiting to be served!";
  }
}


function currentLine(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var output = "";
    for(var i = 0; i < katzDeliLine.length; i++) {
        output += (i + 1) + ". " + katzDeliLine[i] + ", ";
      }
    output = output.slice(0, -2);
    return `The line is currently: ${output}`;
  } else {
    return "The line is currently empty.";
  }
}
