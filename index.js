function takeANumber( DeliLine, name ) {

    DeliLine.push(name);

    return `Welcome, ${name}. You are number ${DeliLine.length} in line.`
}

function nowServing( DeliLine ) {

  return DeliLine.length === 0 ? "There is nobody waiting to be served!" : `Currently serving ${DeliLine.splice(0,1)}.`;
}

function currentLine( DeliLine ) {
  // declare string variable for return msg.
  let string;
  // Check if array is empty and return msg if it is.
  if( DeliLine.length === 0 ) {
    return "The line is currently empty.";
  } else {
    // Build String with opening statement
    string = `The line is currently:`;
    // for loop through array and build msg.
    for( let i = 0; i < DeliLine.length; i++ ) {
      // Ternary coniditon checks if we are at the end of the array, if so. It will not append a comma to the end of the msg.
      DeliLine.length - 1 === i ? string += ` ${i + 1}. ${DeliLine[i]}` : string += ` ${i + 1}. ${DeliLine[i]},`;
    }
  }
  // Returns finished built msg.
  return string;

}
