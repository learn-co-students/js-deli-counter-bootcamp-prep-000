function takeANumber(array , name){
  array.push(name);
  return `Welcome, ${name}. You are number ${array.length} in line.`;
}

function nowServing(array){
  var result; 
  if(array.length > 1){
    result = `Currently serving ${array[0]}.`  
    array.shift();
  } else {
    result = "There is nobody waiting to be served!"; 
  }
  return result;
  
}

function currentLine(array){
  var total = array.length;
  if(total === 0){
    result =  "The line is currently empty."
  } else {
    var newArray = `1. ${array[0]}`;
    
    for(var i = 1; i < array.length; i++){
      newArray += `, ${i + 1}. ${array[i]}`;
    }
    var result = "The line is currently: " + newArray;
  }
    return result;

}