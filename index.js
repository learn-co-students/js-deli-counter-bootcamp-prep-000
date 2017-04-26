var katzDeliLine = [];
function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  var number = katzDeliLine.length;
  return `Welcome, ${name}. You are number ${number} in line.`;
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length !== 0){
    var firstPerson = katzDeliLine[0];
    katzDeliLine = katzDeliLine.shift();
    return "Currently serving " + firstPerson + ".";
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(katzDeliLine){
  if(katzDeliLine.length === 0){
    return "The line is currently empty."
  } else {
     var str = 1 + ". " + katzDeliLine[0]; 
     if(katzDeliLine.length === 1){
       return str;
     } else {
       for(var i=1; i < katzDeliLine.length; i++){
           var num = i+1;
           var str = str + ", " + num + ". " + katzDeliLine[i]; 
        }
       return "The line is currently: " + str;
     }  
    }        
}
