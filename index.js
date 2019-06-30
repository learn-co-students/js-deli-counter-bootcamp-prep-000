var katzDeliLine = [];

function takeANumber(katzDeliLine,name){
  
  katzDeliLine.push(name)
  
  var a=katzDeliLine.indexOf(name)+1
  
 return `Welcome, ${name}. You are number ${a} in line.`
  }
 
 
 function nowServing(katzDeliLine){
  
  if (katzDeliLine.length>=1){
    
    
    var b = katzDeliLine.shift(name)
    return `Currently serving ${b}.`
    
  }
    else {
    return "There is nobody waiting to be served!"
  }
}



function currentLine(katzDeliLine){
var myArray=[];
  if(katzDeliLine.length>=1){
    
    var a = ""
    var i;
    var b = ""
     for (i=0;i<katzDeliLine.length;i++){
     
     a = ` ${i+1}. ${katzDeliLine[i]}`;
     
    myArray.push(a)   
      } 
     
    b = "The line is currently:" + myArray
    b = b.trim();
    return b
     
  }
  else {
    return "The line is currently empty."
  }
  
}