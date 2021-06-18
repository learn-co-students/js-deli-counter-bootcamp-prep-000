function takeANumber(katzDeliLine, name) {
  var katzDeli = []
    katzDeli = katzDeliLine.push(name)
   console.log("Welcome, " + name + ". You are number " + katzDeliLine.length + " in line.");
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line."
}
function nowServing (katzDeliLine) {
  if (!katzDeliLine.length) {
    console.log("There is nobody waiting to be served!")
    return "There is nobody waiting to be served!"
  } else {
    return (`Currently serving ${katzDeliLine.shift()}.`);
  }
}
function currentLine(katzDeliLine) {
  if (!katzDeliLine.length) {
    return "The line is currently empty.";
  }
  var lineNamesandNumbers = [];

for(var i=0; i<katzDeliLine.length; i++) {
  lineNamesandNumbers.push(i+1 + ". "+ katzDeliLine[i]);
}
console.log("The line is currently: " + lineNamesandNumbers)
return "The line is currently: " + lineNamesandNumbers.join(', ');
}
