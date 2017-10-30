var katzDeliLine = [];


function takeANumber(katzDeliLine, name) {

  var position = katzDeliLine.length+1;

  katzDeliLine.push(name);

  return ("Welcome, " + name + "." + " You are number " + position + " in line.")


}


function nowServing(katzDeliLine) {

 if (katzDeliLine.length === 0) {
   return "There is nobody waiting to be served!"
 } else {

   return "Currently serving " + katzDeliLine.shift() + "."
 }

}



function currentLine(line) {                                               var sent = "The line is currently: "
  if (line.length === 0) {
    return "The line is currently empty."
  } else {
    for (var i = 0; i < line.length; i++) {

      sent += i+1;                                                             sent += ". ";
      sent += line[i];                                                         sent += ", ";

    }
  }
    var newSent = sent.split('');
    newSent.pop();
    newSent.pop();
    return newSent.join('');
}
