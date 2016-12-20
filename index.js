'use strict';

var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  var position = katzDeliLine.length;
  return `Welcome, ${name}. You are number ${position} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    return `Currently serving ${katzDeliLine.splice(0, 1)}.`;
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(katzDeliLine) {
  var inLine = [];
  if (katzDeliLine.length > 0) {
    katzDeliLine.forEach(function(name, index){
      inLine.push(`${index + 1}. ${name}`)
    });
    return "The line is currently: " + inLine.join(', ');
  } else {
    return "The line is currently empty."
  }
}