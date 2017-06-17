function takeANumber(katzDeli, newPerson){
  var katzDeli = [];
  var place = katzDeli.length - 1

  if (katzDeli < 0) {
    katzDeli.push(newPerson);
  }

  do {
    return ("Welcome," + newPerson + "You are number" + katzDeli + "in line.")
  } while (newPerson == true);
}

/*
while (newline.length < oldLine.length) {
return ("Welcome, " + getInLine + "." + " You are number " +  position + " in line.")

do {
    var newLine = [...katzDeli]
    var place = newLine.length
  } while (newPerson == true);
  return ("Welcome, " + newPerson + "." + " You are number " + place + " in line." )

  /*var place = katzDeli.length + 1*/

*/
