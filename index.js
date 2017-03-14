
var katzDeliLine = [];
function takeANumber(katzDeliLine, name){
    katzDeliLine.push(name); 
    return (`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`);  
}

function nowServing(array) {
  if (array.length < 1){
      return "There is nobody waiting to be served!";
  }else {
      return `Currently serving ${array.shift()}.`;
  }
   
}

//var myArray = ["Marcelo","Nico","Endy"];

function currentLine(array) {
    var namesAndNumbers = [];
     if (array.length < 1){
    return "The line is currently empty.";}
  for (var i = 0; i < array.length; i++){
     namesAndNumbers.push(`${i+1}. ${array[i]}`); 
  }

return `The line is currently: ${namesAndNumbers.join(', ')}`;
//return `The line is currently: ${namesAndNumbers[i]}. ${array[i]}`;
}