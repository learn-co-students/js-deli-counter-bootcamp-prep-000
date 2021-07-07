
function takeANumber (line, name){
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`;
}



function nowServing (line){
 if (line.length === 0){
   return "There is nobody waiting to be served!";
 }
 
  else {
  let i= `Currently serving ${line.slice(0,1)}.`;
  line.shift();
  return i;
   }

}

function currentLine (line){
  var newarray=[];
  if (line.length === 0){
    return "The line is currently empty.";
  }
  else {
     for (var i = 0; i<line.length; i++){
       newarray.push(`${i+1}. ${line[i]}`);
    }
 return `The line is currently: ${newarray.join(', ')}`;
 }
}
