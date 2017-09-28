var katzDeli = [];

function takeANumber(katzDeliLine, customerName){
  katzDeliLine.push(customerName);
  var i = katzDeliLine.indexOf(customerName, 0) + 1;

  return 'Welcome, ' + customerName + '. You are number ' + i + ' in line.';
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var customer = katzDeliLine.shift();
    return 'Currently serving ' + customer + '.';
  } else {
    return 'There is nobody waiting to be served!';
  }
}

function currentLine(katzDeliLine) {
  var lineSpot = katzDeliLine.length;
    var customer = "";

    for(var i = 0; i < katzDeliLine.length; i++){
        customer +=  `${i + 1}. ${katzDeliLine[i]}, `;
  }
  if(lineSpot === 0) {
    return "The line is currently empty.";
  } else {
   return `The line is currently: ${customer}`.slice(0, -2);
 }
}
