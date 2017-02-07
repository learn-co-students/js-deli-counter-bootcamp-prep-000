var katzDeli = [];



function takeANumber(katzDeli, name){

   katzDeli.push(name);
   var arr = [];
   
   for (var i = 0; i < katzDeli.length; i++) {
     arr.push(`Welcome, ${katzDeli[i]}. You are number ${i} in line.`);
   }
   
   if (arr[i] === katzDeli[i] ){
     return `Welcome, ${katzDeli[i-1]}. You are number ${i} in line.`
      }else{
       return "this shit is not working!!";
       }
}


var firstP
function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    
    firstP =katzDeliLine.shift(katzDeliLine)
    return `Currently serving ${firstP}.`;
    
  }
  else {
    return ('There is nobody waiting to be served!')
  }
}

var arr = [];
function currentLine(katzDeliLine){

  if (katzDeliLine.length > 0){
    
    for(var i = 0; i < katzDeliLine.length; i++){
        arr.push(` ${i+1}. ${katzDeliLine[i]}`);
        
    }
    return "The line is currently:" + arr;
    
  }else{
    return "The line is currently empty."
  }
}