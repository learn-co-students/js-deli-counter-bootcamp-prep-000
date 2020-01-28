function takeANumber(line,name){
  var result = "";
  line.push(name);
  for (var i=0; i< line.length; i ++ ){
    var number = i + 1;
    if(String(line[i])===String(name)){
     result= `Welcome, ${name}. You are number ${number} in line.`;
     return result;
    }
  }
}

function nowServing(line){
  var current = String(line[0]);
  if(line.length === 0){
    return "There is nobody waiting to be served!";
  }else{
    line.shift();/*To delete the first in line */
    return "Currently serving " + current +".";  
  }
}

function currentLine(line){
  var last = "";
  var number = 0;
  
  if(line.length === 0)
  {
   return  "The line is currently empty.";
  }else{
  for(var i = 0; i < line.length; i ++){
   number = i + 1;
   
   if(number===line.length){
     last = last + number + '. ' + line[i];   
   }else{
     last = last + number + '. ' + line[i] + ", ";
   } 
  }
  return `The line is currently: ${last}`;
 }
}
