var katzDeli = [];
var tempArray = [];

function takeANumber( katzDeliLine, name ) {
  katzDeliLine.push( name );
  return `Welcome, ${ name }. You are number '${ katzDeliLine }' in line.`;
}

function nowServing( katzDeliLine, name ) {
  var tempVar = katzDeliLine[0];
  katzDeliLine.shift();

  if( katzDeliLine.length === 0 ) {
    return `There is nobody waiting to be served!`;
  } 
    return `Currently serving ${ tempVar }.`;
}

function currentLine( katzDeliLine ) {
 var tempVar;
 
 
  if ( katzDeliLine.length === 0 ) {
    return "The line is currently empty."
  }
  
  for( var i = 0; i < katzDeliLine.length; i++ ) {
    tempVar = ${i + 1} + ". " + katzDeliLine[i];
    tempArray.push(tempVar);
  
  }
  return "The line is currently: " + tempArray;
}