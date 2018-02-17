'use strict';

var deliLine = [];

function takeANumber(katzDeliLine, customerName) {
  katzDeliLine.push(customerName);
  return `Welcome, ${customerName}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(deliLine) {
  var curCust = deliLine.shift();
  if(deliLine.length > 0) {
    return `Currently serving ${curCust}.`;
  } else {
    return `There is nobody waiting to be served!`;
  }
}

function currentLine(deliLine) {
  var lineString = '';
  var introString = 'The line is currently: ';

  if(deliLine.length === 0) return 'The line is currently empty.';

  for(var i = 0; i < deliLine.length; i++) {
    if(i < deliLine.length - 1) {
      lineString += `${i + 1}. ${deliLine[i]}, `;
    } else {
      lineString += `${i + 1}. ${deliLine[i]}`;
    }
  }
  return introString + lineString
}
