function takeANumber(number, name) {
  number.push(name);
  return "Welcome, " + name + ". You are number " + number.length + " in line.";
}
function nowServing(number) {
  if(number.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    return "Currently serving " + number.shift() + ".";
  }
}
function currentLine(number) {
  var newArray = [" 1. Bill, 2. Jane, 3. Ann"];
  if (number.length > 0) {
    for(var i = 0; i < number.length; i++)
  return "The line is currently:" + newArray;
} else {
  return "The line is currently empty."
}
  }
