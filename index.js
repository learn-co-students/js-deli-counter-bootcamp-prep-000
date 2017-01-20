var katzDeliLine = [];
function takeANumber(katzDeliLine, name){
  katzDeliLine.push (name);
return (`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`)
}

  function nowServing (n) {
    if (n.length===0) {
      return "There is nobody waiting to be served!"; }
      else {
        var queue = n[0];
        n.shift ();
        return (`Currently serving ${queue}.`);
      }
  }

function currentLine (array) {
  var i = 0;
   if (array.length===0) {
     return ("The line is currently empty.")}
     else {
       var names = [];
       var newArray = "The line is currently:";
       for (i=0; i < array.length; i++) {
    names.push (` ${i+1}. ${array[i]}`);
       }
   }
   return newArray + names
 }
