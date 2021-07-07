var katzDeliLine = [];

function takeANumber(katzDeliLine, customer){
          katzDeliLine.push(customer);
          return `Welcome, ${customer}. You are number ${katzDeliLine.length} in line.`;
}





function nowServing(katzDeliLine){
  
     if(katzDeliLine.length > 0){
    	return `Currently serving ${katzDeliLine.shift()}.`;
    } else {
    	return `There is nobody waiting to be served!`;
      }
}


function currentLine(katzDeliLine){
  
    if(katzDeliLine.length > 0){
    var array = [];
          for(var i = 0; i < katzDeliLine.length; i++){
           array.push(`${i+1}. ${katzDeliLine[i]}`);   
          }
          return ("The line is currently: " + array.join(", "));
    }else{
        return `The line is currently empty.`;
    }
}