var katzDeli = [] ;

function takeANumber(array, name) {
  
  if(array.length === 0) {
  array.push(name) ;
  return `Welcome, ${name}. You are number 1 in line.` ;
  } else {
    array.push(name) ;
  return `Welcome, ${name}. You are number ${array.length} in line.` ;
}
}

function nowServing(array, name) {
  if (array.length === 0) {
    return "There is nobody waiting to be served!" ; 
  } else {
     
      return `Currently serving ${array.shift()}.`; 
      
  }
}

function currentLine(array, name) {
  if (array.length === 0) {
    return "The line is currently empty." ;
  } else {
  
    var newArray = [] ; 
    
    for (var n=0; n < array.length; n++) {
      newArray.push(`${n + 1}. ${array[n]} `);
      
    }
    
    return `The line is currently: ${newArray}` ;  
    
  }
}







