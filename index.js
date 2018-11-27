
var katzDeliLine = ["Jane", "Juan", "Ngugiwa"]; 
var number = 0; 

function takeANumber (katzDeliLine, name){
  number = katzDeliLine.length + 1; 
  //maybe add incoming customer to array? 
  return `Welcome, ${name}, you are number ${number} in line.`; 
  
} 

function nowServing (katzDeliLine) {
    if (katzDeliLine.length>0){
      var firstPerson = katzDeliLine.shift; 
      return `Now serving ${firstPerson}.`; 
    } else {
       return "There is nobody waiting to be served!"; 
    }
}
    
    
function currentLine(katzDeliLine){
    if (katzDeliLine.length === 0){
        return "The line is currently empty."; 
    } else {
        var text = "The line is currently: "; 
        for (i=0; i++; i<katzDeliLine.length){
        text += katzDeliLine[i] } 
        return text; 
    } 
    
} 

takeANumber(1, "jane"); 
nowServing ("lena", 'eunice'); 
currentline(); 
