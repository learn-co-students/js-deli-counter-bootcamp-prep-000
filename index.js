function takeANumber(katzDeliLine,newCustomer) {
  katzDeliLine.push(newCustomer);
  var numberInLine = katzDeliLine.length;

  return (`Welcome, ${newCustomer}. You are number ${numberInLine} in line.`);
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    var current = katzDeliLine.shift();
    return `Currently serving ${current}.`;
  }
}


function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  } else {
    var combinedArray = [];
    for (var i=0; i<katzDeliLine.length; i++) { combinedArray.push(`${i + 1}. ${katzDeliLine[i]}`);
    }
    var arrayJoined = combinedArray.join(", ");
    return `The line is currently: ${arrayJoined}`;
  }
}

//my oringinal currentLine function below
/* function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  } else {
    var combinedArray = [];
    for (var i = 0; i < katzDeliLine.length; i++) { 
      combinedArray.push(`${i + 1}. ${katzDeliLine[i]}`);
    }
    var arrayJoined = "";
    for (var j = 0; j < combinedArray.length; j++) {
      arrayJoined = arrayJoined.concat(combinedArray[j], ", ");
    }
    arrayJoined = arrayJoined.slice(0, arrayJoined.length-2); //removes the last comma and space
    return `The line is currently: ${arrayJoined}`;
  }
} */

