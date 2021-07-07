
function takeANumber(array, name){
  array.push(name);
  return `Welcome, ${array[array.length-1]}. You are number ${array.length} in line.`
}

function nowServing(array) {
  if (array.length === 0) {return "There is nobody waiting to be served!"}
else {
  var name = array[0]
  array.shift();
  return `Currently serving ${name}.`}


}

function currentLine(array)
{
  if (array.length ===0) {return "The line is currently empty."}
  else {

   var n = array.length;
   var i=1;
   var answer = `The line is currently: 1. ${array[0]}`;
   while (i<n) {answer = answer + ", " + ++i + ". " + array[i-1]}

    return answer}
}
