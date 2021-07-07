var katzDeli = [];

function currentLine(katzDeliLine){
  let lineList = ['The line is currently: '] ;
  if (katzDeliLine.length === 0){
	  return "The line is currently empty."
  }
  
  for (let i = 0; i < katzDeliLine.length; i++){
    lineList.push(i+1, '. ', katzDeliLine[i], ', ');
  }
  
  lineList.pop();
  
  return lineList.join('');
}
var yourMom = "Sara";
var katzDeliLine = ['Pam', 'Jessica', yourMom];
console.log(currentLine(katzDeliLine));

var next = "Rachel";

function takeANumber(line, name){
  line.push(name);
  return "Welcome, " + name + ". You are number " + line.length + " in line.";
}

console.log(takeANumber(katzDeliLine,next));

function nowServing(line){
  if (line.length === 0){
    return "There is nobody waiting to be served!";
  }
  
  var next = line.shift();
  return 'Currently serving ' + next + '.';
  
}









