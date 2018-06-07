var katzDeli = [];

function takeANumber(katzDeliLine, customerName){
 katzDeliLine.push(customerName)
  return 'Welcome, ' + customerName + '. ' + 'You are number ' + (katzDeliLine.indexOf(customerName) + 1) + ' in line.'
}

function nowServing(katzDeli) {
  if (katzDeli.length === 0) {
    return "There is nobody waiting to be served!";
    } else {
      var line = katzDeli[0]
      katzDeli.shift()
  return "Currently serving " + line + "."
    }
  }
nowServing();

function currentLine(line){
  if(line.length === 0) {
    return "The line is currently empty."
  } else {
    var array = [];
      for(var i=0; i<line.length; i++) {
    array.push(i+1 + ". "+ line[i]);
  }
  return "The line is currently: " + array.join(', ');
  }
  
}