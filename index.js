var katzDeliLine = [];

function takeANumber(katzDeliLine, param2) {
  var msg;

  katzDeliLine.push(param2);

  msg = "Welcome, " + param2 + ". You are number " + katzDeliLine.length + " in line."

  return msg
}

function nowServing(paramArray) {
  var msg = "Currently serving ";
  console.log("===================");
  console.log(paramArray);
  console.log(paramArray.lentgh);
  console.log("===================");
  if ( paramArray[0] === undefined ) {
    msg = "There is nobody waiting to be served!"
  } else {
    msg += paramArray.shift() + ".";
  }

  return msg
}

function currentLine(paramArray) {
  var msg = "The line is currently: ";

  var i = 0, j = 1;

  if ( paramArray[0] === undefined ) {
    msg = "The line is currently empty.";
  } else {
    for( ; i < paramArray.length ; i++, j++ ) {
      msg += j + ". " + paramArray[i]

      if (paramArray.length > 1 && paramArray.length <> i) {
         msg += ", "
      }
    }
  }

  return msg
}
