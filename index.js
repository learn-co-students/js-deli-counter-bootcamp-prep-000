var katzDeli = [];

function takeANumber(katzDeli,name) {
  katzDeli.push(name);
  return (`Welcome, ${name}. You are number ${katzDeli.length} in line.`);
}

function nowServing(array) {
  if (array.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    var current = array.shift();
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

