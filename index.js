var katzDeliLine = [];


//const newCustomer = ["Ada", "Grace", "Kent"];
//const lineNum = ["1", "2", "3", "4"];

function takeANumber(katzDeli, name){

katzDeli.push(name);

return "Welcome, " + name + ". You are number " + katzDeli.length + " in line.";
} 

var x = 0;
function takeANum(){
x++;
return "You are number " + x + " in line.";
} 

function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0){
    return "There is nobody waiting to be served!";
  }
  else {
    return "Currently serving " + katzDeliLine.shift() + ".";
  }
}

function currentLine(katzDeliLine){
  
  var currKatzLine = [];
  var lineNum = ["1", "2", "3"];
  if (katzDeliLine.length === 0){
    return "The line is currently empty.";
  }
    else {
      for (let i = 0; i < katzDeliLine.length; i++){ 
      currKatzLine.push(" " + (i + 1) + ". " + katzDeliLine[i]);
        
      }
      return "The line is currently:" + currKatzLine;
    }
}