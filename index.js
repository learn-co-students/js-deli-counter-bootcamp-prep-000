
function takeANumber(currentLine,name){
  currentLine.push(name);
   return `Welcome, ${name}. You are number ${currentLine.length} in line.`;
 }
 
 function nowServing(currentLine){
   if(currentLine.length>0){
    var name=currentLine[0];
   currentLine.shift();
    return `Currently serving ${name}.`;
   }
   else{
     return `There is nobody waiting to be served!`;
   }
     
   }

    function currentLine(currentLine){
   
   if(currentLine.length===0){
     return `The line is currently empty.`;
   }
   let newLine=[];
   for(let i=0; i<currentLine.length;i++){
    
     newLine.push(" "+(i+1)+". " + currentLine[i]);
     
   }
     return `The line is currently:${newLine}`;
   
 }
   
