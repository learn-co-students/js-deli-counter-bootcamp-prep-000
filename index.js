//var katzDeliLine = [];

function takeANumber(lineOfpeople,newPerson){
  lineOfpeople.push(newPerson);
  return `Welcome, ${newPerson}. You are number ${lineOfpeople.indexOf(newPerson)+1} in line.`;
  
}


  
 


function nowServing(katzDeliLine){

  if(katzDeliLine.length===0){
    return "There is nobody waiting to be served!";
  }else{
    for(var i = 0;i<katzDeliLine.length;i++){
      return 'Currently serving '+ katzDeliLine.shift()+'.'
    }
    
    
  }
  
   
}
 var array = [];
function currentLine(katzDeliLine){
  if(katzDeliLine.length ===0){
    return `The line is currently empty.`;
  }else{
    var string="The line is currently: " ;
    for(var i = 0; i<katzDeliLine.length;i++){
      string += i+1 +". "+katzDeliLine[i];
      if(i!==katzDeliLine.length-1){
        string +=", ";
      }
     
    }
    return string;
    
  }
  
  
  
}
