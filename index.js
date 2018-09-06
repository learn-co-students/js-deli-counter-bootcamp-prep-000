function takeANumber (line, name){
  var i =line.length + 1
  line.push (name);
  return `Welcome, ${name}. You are number ${i} in line.`;
}

function nowServing (line){
  var i = line.slice(0)
  line.shift();
 if (line.length <= 0){
   return "There is nobody waiting to be served!";
 }
 
  else {
  return `Currently serving ${i[0]}.`;
   }

}

function currentLine (line){
  var newarray=[];
  if (line.length <= 0){
    return "The line is currently empty.";
  }
  else {
    newarray.push(`1. ${line[0]}`) ;
    for ( var i = 1; i< line.length; i++ ){
    newarray.push(` ${i+ 1}. ${line[i]}`) ;
    }
    return `The line is currently: ${newarray}`;
}}