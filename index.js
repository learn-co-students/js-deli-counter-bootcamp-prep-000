var katzDeliLine = [];

function takeANumber( myLine, name ) {
  return `Welcome, ${ name }.  You are number ${ myLine.indexOf( name ) + 1 } in line.`;
}

function nowServing( myLine ) {
  if ( myLine.length > 0 ) {
    var firstInLine = myLine.shift();
    return `Currently serving, ${ firstInLine }.`;
  }
  else {
    return 'There is nobody waiting to be served!';
  }
}

function currentLine( myLine ) {
  if ( myLine.length > 0) {
    var currentList = [];
    var x;
    for ( x = 0; x < myLine.length; x++ ) {
      currentList.pop(` ${ x + 1 }. ${ myLine[ x ] }`);
    }
    return `The line is currently:${ currentList.( slice( 0 ) ) }`;
  }
  else {
    return 'The line is currently empty.';
  }
}
