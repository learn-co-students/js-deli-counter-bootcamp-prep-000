function takeANumber( katzDeliLine, name ) {

    katzDeliLine.push(name);

    return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing( katzDeliLine ) {

  return katzDeliLine.length === 0 ? "There is nobody waiting to be served!" : `Currently serving ${katzDeliLine.splice(0,1)}.`;
}

function currentLine( katzDeliLine ) {
  // declare string variable for return.
  let string;
  // Check if array is empty and return msg if it is.
  if( katzDeliLine.length === 0 ) {
    return "The line is currently empty.";
  } else {
    // Build String with opening statement
    string = `The line is currently:`;
    // for loop through array and build msg.
    for( let i = 0; i < katzDeliLine.length; i++ ) {
      // Ternary coniditon checks if we are at the end of the array, if so. It will not append a comma to the end of the msg.
      katzDeliLine.length - 1 === i ? string += ` ${i+1}. ${katzDeliLine[i]}` : string += ` ${i+1}. ${katzDeliLine[i]},`;
    }
  }
  // Returns finished built msg.
  return string;

}
