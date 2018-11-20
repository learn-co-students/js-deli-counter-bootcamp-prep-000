var katzDeliLine = [];
var line = []

function takeANumber(array, str){
    array.push(str);
    
    return "Welcome, " + str + ". You are number " + (array.length) + " in line.";
    
}
//takeANumber(katzDeliLine, "Ada");
//takeANumber(katzDeliLine, "Grace");
//console.log(katzDeliLine);
//console.log(line)
function nowServing(array1){
  
  
  if (array1.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    return "Currently serving " + array1.shift() + "." ;
  }
  
  
}
function currentLine(array){
  if (array.length === 0){
    return "The line is currently empty."
    } else {
      for (var i = 0;i<array.length; i++){
        return "The line is currently: " + (i+1) + ". " + array[i]+", "+(i+2) + ". " + array[i+1]+", "+(i+3) + ". " + array[i+2]
        
      }
    }
}

