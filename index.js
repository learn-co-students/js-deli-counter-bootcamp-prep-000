var katzDeli = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return ("Welcome, " + name + "." + " You are number " + katzDeliLine.length + " in line.");
}

function nowServing(katzDeliLine){
    if (katzDeliLine.length > 0){
      const person = katzDeliLine.shift();
    return ("Currently serving " + person + ".")

    }else if (katzDeliLine.length === 0){
      return ("There is nobody waiting to be served!");
    }
  }

function currentLine(katzDeliLine){
    if (katzDeliLine.length > 0){
      var peopleInLine = "The line is currently: ";
      for (var i = 0; i < katzDeliLine.length; i++){
        peopleInLine = (peopleInLine + (i + 1) + ". " + katzDeliLine[i] + ", ");
      }
      peopleInLine = peopleInLine.slice(0, peopleInLine.length - 2) // "1. Bill, 2. Jane, 3. Ann, "
    return peopleInLine;

  }else if (katzDeliLine.length === 0){
    return ("The line is currently empty.");
}
}
