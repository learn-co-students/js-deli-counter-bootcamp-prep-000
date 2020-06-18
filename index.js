

/*function takeANumber(katzDeli, newCustomerName){
 katzDeli.push(newCustomerName);
 newCustomerName = 'Ada';
   
  for (let i = 1; i < katzDeli.length; ++i){
  
  return `Welcome, ${newCustomerName}. You are number   ${i} in line.`;
  }
}*/

function takeANumber(deliLine, newCustomerName){
    deliLine.push(newCustomerName);
    return  `Welcome, ${newCustomerName}. You are number ${deliLine.length} in line.`;
}





function nowServing(deliLine){
  if(deliLine.length > 0){
    return "Currently serving " + deliLine.shift() + ".";
  } else {
    
    return "There is nobody waiting to be served!";
    }
  }
  
  


function currentLine(deliLine) {
  if (deliLine.length > 0) {
    var output = "";
    for(var i = 0; i < deliLine.length; i++) {
        output += (i + 1) + ". " + deliLine[i] + ", ";
      }
    output = output.slice(0, -2);
    return `The line is currently: ${output}`;
  } else {
    return "The line is currently empty.";
  }
}
