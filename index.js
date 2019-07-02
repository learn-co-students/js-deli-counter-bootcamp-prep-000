
function takeANumber(katzDeliLine, name) {
var message = ("Welcome, " + name + ". " + "You are number " + (katzDeliLine[i].length + 1)  + " in line.")
console.log(message);
return message
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
return "Currently serving " + katzDeliLine.shift() + "."
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(deliLine) {
  var i = 0;
  var lineLen = deliLine.length;
  var text = "The line is currently: ";

  if (lineLen === 0) {
    return "The line is currently empty."
  }
  else{
     while (i < lineLen) {
      text += (i + 1) + ". " + deliLine[i] + ",";
  i++;
}
return text
}}
