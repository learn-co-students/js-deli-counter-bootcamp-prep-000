
var katzDeliLine = ["Jane", "Juan", "Ngugiwa"]; 
var number = 0; 

function takeANumber (number, name){
  return `Welcome, ${name}, you are number ${number} in line.`; 
} 

function nowServing (katzDeliLine) {
    var firstPerson = katzDeliLine.shift; 
    if (firstPerson===0){
        return "There is nobody waiting to be served!"}
        else { 
    console.log(`Now serving ${firstPerson}.`)}
    }
function currentLine(katzDeliLine){
    if (katzDeliLine === 0){
        return "The line is currently empty."; 
    } else {
        return `The line is currently: 1. ${katzDeliLine[0]}, 2. ${katzDeliLine[1]}`;
    } 

} 

takeANumber(1, "jane"); 
nowServing ("lena", 'eunice'); 
currentline(); 
