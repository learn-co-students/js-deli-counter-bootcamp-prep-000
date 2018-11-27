
var katzDeliLine1 = ["Jane", "Juan", "Ngugiwa"]; 
var katzDeliLine2 = ["Vitaliy", "renae", "Nina", "Belka"]; 
var number = 0; 

function takeANumber (katzDeliLine, name){
  number = katzDeliLine.length + 1; 
  //maybe add incoming customer to array? 
  return `Welcome, ${name}, you are number ${number} in line.`; 
} 

function nowServing (katzDeliLine) {
    if (katzDeliLine.length>0){ 
      var firstPerson = katzDeliLine.shift(); 
      return `Now serving ${firstPerson}.`; 
    } else {
       return "There is nobody waiting to be served!"; 
    }
}
    
function currentLine(katzDeliLine){
    if (katzDeliLine.length ===0){
        return "The line is currently empty."; 
    } else {
        var text = "The line is currently: "; 
        for (i=0; i<katzDeliLine.length-1; i++){ 
          text = `${text} ${katzDeliLine[i]}, `; 
        } 
        text = `${text} ${katzDeliLine[katzDeliLine.length-1]}.`; 
        return text; 
    } 
    
} 


var text = takeANumber(katzDeliLine1, "jane"); 
console.log(text); 

text = nowServing (katzDeliLine1); 
console.log(text); 


text = currentLine(katzDeliLine2); 
console.log(text); 

