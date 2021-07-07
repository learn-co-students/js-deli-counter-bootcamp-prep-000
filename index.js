function takeANumber(array, newCustomer){
  array.push(newCustomer);
  return `Welcome, ${newCustomer}. You are number ${array.length} in line.`;
}

function nowServing(array){
  var serving = ""
  if(array.length === 0){
    return "There is nobody waiting to be served!"
  }
  else{
    serving = array.shift();
    return `Currently serving ${serving}.`;
    
  }
}

function currentLine(array){
  var string = 'The line is currently: ';
  if (array.length === 0){
    return "The line is currently empty.";
  }else{
    for(var i = 0; i < array.length; i++){
      if(i<array.length-1){
        string = string + `${i+1}. ${array[i]}, `;
      }else{
        string = string + `${i+1}. ${array[i]}`
      }
      
    }
    return string;
  }

}