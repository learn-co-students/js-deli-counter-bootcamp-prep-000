var katzDeliLine = [];

function takeANumber (katzDeliLine, name) {
  katzDeliLine.push(name);
  var placeInLine = katzDeliLine.indexOf(name) + 1;
  return "Welcome, " + name + ". You are number " + placeInLine + " in line.";
};

function nowServing () {
  if (katzDeliLine = []) {
    return "There is nobody waiting to be served!";
  } else {
    return "Currently serving " + katzDeliLine[0];
    array.shift();
  }
};

function currentLine (katzDeliLine) {
  if (katzDeliLine.length > 0) {
    return "The line is currently: " + for(i = 0; i < katzDeliLine.length; i++) {
      return (i + 1) + ". " + katzDeliLine[i];
    }
  };
