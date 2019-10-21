var KatzDeliLine = [];

function takeANumber(KatzDeliLine, name) {
  KatzDeliLine.push(name);
  return "welcome " + name + " . you are number  " + KatzDeliLine.length + "in line." ;
}

function nowServing(KatzDeliLine) {
  if(KatzDeliLine.length === 0 ){
    return "there is nobody is waiting to be served, Mate!!"
  } else {
    var customer = KatzDeliLine.shift(0);
    return"currently serving " + name + "." ;
  }
}

function currentLine(n) {
 var customer = [];
  if( n.length === 0) {
    return "the line is empty"
  } else {
    for (var i = 0; i < customer.length; i++ ) {
      customer.push (i + 1 " . " + KatzDeliLine[i]);
  } 
  return "the line is currently; " + n
  }
  
  