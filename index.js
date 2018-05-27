var katzDeli = [];
let takeANumber = function(array,name){
  array.push(name);
  var l=array.length;
  return `Welcome, ${name}. You are number ${l} in line.`;
}

let nowServing = function(array){
  var name = array.shift();
  if(array.length===0)
   return "There is nobody waiting to be served!";
  else
   return `Currently serving ${name}.`
}

let currentLine = function(array){
   if (array.length===0) {
   return "The line is currently empty.";
   }
   var customerAndNumber = [];
   for (var i=0; i<array.length; i++) {
   customerAndNumber.push(i + 1 + ". " + array[i])
   }
  return "The line is currently: " + customerAndNumber.join(", ");
}