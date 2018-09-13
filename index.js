// take a number 

function takeANumber (line,  name) {
  
  line.push(name);
  
  var i = line.length;
  
  return (`Welcome, ${name}. You are number ${i} in line.`);
}


//now serving function


function nowServing (line) {
  
  var firstPerson = line[0];
  
  var length = line.length;
  
  line.shift();
  
  if (length===0) {
  
  return "There is nobody waiting to be served!"
  
  } else {
    
     return (`Currently serving ${firstPerson}.`)}
  

}

function currentLine(line) {
  
  
  if (line.length===0) {
  
  return ("The line is currently empty.")
  }
  
 else {
   
   var currentLine=[]
   
   for(var i=0; i<line.length; i++) {
   
   currentLine.push(i+1 + ". " + line[i])
   
   }
  return ("The line is currently: ") + (currentLine.join(", "))
  
  }
}





