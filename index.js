function takeANumber(katzDeliLine,nameOfCustomer) {
 katzDeliLine.push(nameOfCustomer);
 return  "Welcome, "+nameOfCustomer+". You are number "+String(katzDeliLine.indexOf(nameOfCustomer)+1)+" in line." ;
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length>0){
    var nextCustomer = "Currently serving "+katzDeliLine[0]+".";
    katzDeliLine.shift(nextCustomer);
  } else {
    var nextCustomer = "There is nobody waiting to be served!"
  }
  return nextCustomer
}

function currentLine(katzDeliLine) {
  if(katzDeliLine.length>0) {
    var customerList = "The line is currently:"
    for(var k = 0; k < katzDeliLine.length; k++){
      customerList += " "+String(k+1)+". "+katzDeliLine[k]+","
    }
  } else {
    var customerList = "The line is currently empty.."
  }
  return customerList.slice(0,customerList.length-1)
}
