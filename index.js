function takeANumber(katzDeliLine, customer){
  katzDeliLine.push(customer);
  var num = 0;
  for( var i = 0; i < katzDeliLine.length; i++){
    num = num + 1;
  }
  return "Welcome, " + customer +  ". " + "You are number " + num + " in line.";
}

function currentLine(katzDeliLine){
  var line = "The line is currently: ";

  if(katzDeliLine.length > 0){

    for(var i = 0; i < katzDeliLine.length; i++){
      line = line + (i + 1) + ". " + katzDeliLine[i];
      if(i < katzDeliLine.length - 1){
        line = line + ", ";
      }
    }

  }else{
    line = "The line is currently empty.";
  }
  return line;
}


function nowServing(katzDeliLine) {
  if(katzDeliLine.length > 0){
    var customer = katzDeliLine.shift();
    return "Currently serving " + customer + ".";
  }else{
    return "There is nobody waiting to be served!";
  }
}
