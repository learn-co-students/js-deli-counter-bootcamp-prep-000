var katzDeli = [];

function takeANumber(katzDeliLine, customerName){
  katzDeliLine.push(customerName);
  return (`Welcome, ${customerName}. You are number ${katzDeliLine.length} in line.`);
}

function nowServing(myArray){
  if(myArray.length === 0){
    return "There is nobody waiting to be served!";
  }else{

    return ("Currently serving " +myArray.shift() +".");
  }
}
function currentLine(myArray){
  var theLine = [];
  if(myArray.length === 0){
    return ("The line is currently empty.");
  }else{
    for(var i = 0; i < myArray.length; i++){
       theLine.push(" "+ [i+1] + ". " +myArray[i]);

    } return ("The line is currently:" + theLine);
  }
}
