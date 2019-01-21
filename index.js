function takeANumber(currentCustomers, newCustomer){
  var currentWait = currentCustomers.length+1;
  currentCustomers.push(newCustomer);
  return "Welcome, "+ newCustomer +". You are number "+ currentWait +" in line."
}
function nowServing(katzDeliLine){
  if(katzDeliLine.length===0){
    return "There is nobody waiting to be served!"
  }else{
  var firstInLine = katzDeliLine.shift();
  katzDeliLine.slice(1);
}
return "Currently serving "+firstInLine+".";
}
function currentLine(currentCustomers){
  if(currentCustomers.length===0){
    return "The line is currently empty."
  }
  var newArray = ['1. '+currentCustomers[0]];
for(let i = 1; i<currentCustomers.length; i++){
  newArray.push(' '+(i+1)+'. '+currentCustomers[i]);
}
return "The line is currently: "+newArray;
}
