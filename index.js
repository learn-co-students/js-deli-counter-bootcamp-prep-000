// 1. Build a function that a new customer will use when entering the deli. The function, `takeANumber`,
//should accept the current line of people, `katzDeliLine`, along with the new person's name as parameters.
//The function should return their position in line. And don't go being too programmer-y and give them their index.
//These are normal people. If they are 7th in line, tell them that. Don't get their hopes up by telling them they are number 6 in line.
//
function takeANumber(katzDeliLine, person){
  katzDeliLine.push(person);
  return "Welcome, "+  person + ". You are number " + katzDeliLine.length + " in line.";

}
// 2. Build a function `nowServing`. This function should return the next person in line and then remove them from the line.
//If there is nobody in line, it should return "There is nobody waiting to be served!"

function nowServing(katzDeliLine){
  if(katzDeliLine.length === 0){
    return "There is nobody waiting to be served!";
  }else{
    var who = katzDeliLine.shift();
    return "Currently serving " + who + ".";
  }
}

// 3. Build a function `currentLine` that returns the current line.
//For example, if `katzDeliLine` is currently `["Ada", "Grace"]`, `currentLine(katzDeliLine)` would return `"The line is currently: 1. Ada 2. Grace"`.
// If there is nobody in line, it should return `"The line is currently empty."`

function currentLine(katzDeliLine){
  var line = "The line is currently: "
  var names = [];
  if(katzDeliLine <= 0){
    return "The line is currently empty."
  }else{
    for(var i = 0; i < katzDeliLine.length; i++){
      names.push(i+1 + ". " + katzDeliLine[i]);
    }
  }
return line+ names.join(', ');
}
