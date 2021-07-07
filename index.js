var katzDeli = [];

function takeANumber(katzDeli, newName) {
  katzDeli.push(newName);
  return("Welcome, " + newName + ". You are number " + katzDeli.length + " in line.");
}

function nowServing(katzDeli) {
  if (katzDeli.length > 0) {
    var currentCustomer = katzDeli[0];
    katzDeli.shift();
    return("Currently serving " + currentCustomer + ".");
  } else {
    return("There is nobody waiting to be served!");
  }
}

function currentLine(line) {
  if (line.length > 0) {
    var deliLine = [];
      for (var i = 0; i < line.length; i++) {
        deliLine.push(" " + (i + 1) + ". " + line[i]);
      }
    return("The line is currently:" + deliLine.toString());
  } else {
    return("The line is currently empty.");
  }
}



takeANumber(katzDeli, "Rex");
takeANumber(katzDeli, "Jason");
takeANumber(katzDeli, "Bart");
console.log(katzDeli);
nowServing(katzDeli);
console.log(katzDeli);
nowServing(katzDeli);
console.log(katzDeli);