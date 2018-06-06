var katzDeli=[];


function takeANumber(katzDeliLine,name){
  katzDeliLine.push(name);
  var numberInLine = katzDeliLine.indexOf(name)+1;
  return "Welcome, "+name+ ". You are number "+numberInLine+" in line."
}

function nowServing(n){
  
  if(n.length > 0){
    
    var nowServing = n.shift()
   return 'Currently serving '+nowServing+'.'
  
  }
 
  if( n.length === 0){
  return "There is nobody waiting to be served!"
 
}
 
}

function currentLine(n){
  
  var currentLine=[];
  
    if(n.length > 0){
    for(var i=0; i<n.length; i++){
      
     if(i===0){ 
   currentLine[i]= (i+1)+". "+n[i];
     } else{
        currentLine[i]= " "+(i+1)+". "+n[i];
     }
     
   
    }
    
    return "The line is currently: "+currentLine
  }
 
  if( n.length === 0){
  return "The line is currently empty."
 
}
  
}