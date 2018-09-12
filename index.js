function takeANumber (array, name) {
  array.push(name);
  return String ("Welcome, " + name + ". You are number " + (array.length) + " in line.");
}

function nowServing (katzDeliLine) {
  if (katzDeliLine.length > 0) {
    return ("Currently serving " + katzDeliLine.shift() + ".")
  }else{
      return String ("There is nobody waiting to be served!");
  }
}

function currentLine (katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var newArray = []
    newArray.push ("1. "+ katzDeliLine[0])
    for (let i = 1; katzDeliLine.length > i; i++) {
      newArray.push (" " + (i + 1) + ". " + katzDeliLine[i])
    }
    return String ("The line is currently: " + newArray);
  }else{
      return String ("The line is currently empty.");
   }  
}