var katzDeliLine = [];

function takeANumber(katzDeliLine,name)  {
  katzDeliLine.push(name);
  return 'Welcome, '+name+'. You are number '+katzDeliLine.length+' in line.';
}

function nowServing(katzDeliLine) {

  if(katzDeliLine.length==0) {
    return "There is nobody waiting to be served!";
  }

  var cust=katzDeliLine.shift();
  return ('Currently serving '+cust+".");
  
}

function currentLine(katzDeliLine) {
  if(katzDeliLine.length==0) {
    return "The line is currently empty.";
  }
  
  var msg="The line is currently: ";
  for(var i=0;i<katzDeliLine.length;i++){
    msg+=(i+1)+". "+katzDeliLine[i];
    if(i!=katzDeliLine.length-1){
      msg+=", ";  
    }
    
  }

  return msg;
  
}