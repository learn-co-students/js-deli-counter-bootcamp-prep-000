function takeANumber(line,name) {
  line.push(name)
  var length= line.length 
 return (`Welcome, ${name}. You are number ${length} in line.`)
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length>0){
  var line= katzDeliLine.shift();
    return `Currently serving ${line}.`;
  }
  else{
   return "There is nobody waiting to be served!";
  }
}
function currentLine (line) {
 if (line.length>0) {
   var array=[]
    var statement="The line is currently:"
    for (var i=0; line.length>0; i++) {
  array.push(statement += ` ${i}. ${line},`)
    }
   return array;
 }else{
     return "The line is currently empty.";
 }
}