var katzDeliLine = [];

function takeANumber(katzDeliLine, customerName) {
  // update the line by pushing the new customer onto the array
  katzDeliLine.push(customerName);
  // return a message about their position in line
  return 'Welcome, ' + customerName + '. You are number ' + katzDeliLine.length + ' in line.'
}

function nowServing(katzDeliLine) {
  // first check to see if there are customers waiting to be served
  if(katzDeliLine[0] === undefined) {
    return 'There is nobody waiting to be served!'
  } else {
    // grab the person being served before updating array
    let nowServed = katzDeliLine[0];
    // update the array by removing the first person
    katzDeliLine.shift();
    return 'Currently serving ' + nowServed + '.';
  }
}

function currentLine(katzDeliLine) {
  // create a string variable to build our lineup statement
  var lineup = '';
  // first check to see if there is nobody in line
  if(katzDeliLine[0] === undefined) {
    return 'The line is currently empty.';
  } else {
    // loop through the array to extract data
    for(let i = 0; i < katzDeliLine.length; i++) {
      // a relatively complex way to append new people to our lineup string
      lineup = lineup + parseInt(i+1) + '. ' + katzDeliLine[i] + ', '
    }
  }
  // return our statement and lop off the trailing comma
  return 'The line is currently: ' + lineup.slice(lineup, lineup.length - 2);
}
