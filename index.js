

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return "Welcome, " + (name) + ". You are number " + (katzDeliLine.length) + " in line.";
}

function nowServing(array) {
  var z =[]
  if (array.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    z.push("Currently serving " + array[0] + ".");
}
  array.shift()
  return z
}

function currentLine(array) {
  var listNumber = [];
  var string = "The line is currently: "
  if (array.length === 0) {
   return("The line is currently empty.");
 }
    for (var i = 0; i < array.length; i++) {
      listNumber.push(`${i + 1}. ${array[i]}`);
    }
      return string = string + listNumber.join(', ');
}
