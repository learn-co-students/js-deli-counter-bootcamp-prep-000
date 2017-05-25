var katzDeliLine = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return (`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`)
}

function nowServing(katzDeliLine){
    if (katzDeliLine.length > 0) {
      var name = katzDeliLine.shift();
      return (`Currently serving ${name}.`)
    }
    else {
      return ("There is nobody waiting to be served!")
    }
  }
  function currentLine(katzDeliLine){
    if (katzDeliLine.length > 0){
      for (var i = 0; i < katzDeliLine.length; i++){
        peopleInLine = (peopleInLine + (i + 1) + ". " + katzDeliLine[i] + ", ");
      }
      peopleInLine = peopleInLine.slice(0, peopleInLine.length - 2) // "1. Bill, 2. Jane, 3. Ann, "
    return peopleInLine;

  }else if (katzDeliLine.length === 0){
    return ("The line is currently empty.");
  }
  }

  function currentLine(katzDeliLine){
    let peopleInLine = new Array();
    if (katzDeliLine.length > 0){
      for (var i = 0; i < katzDeliLine.length; i++){
        peopleInLine.push(`${i + 1}. ${katzDeliLine[i]}`);
      }
      let peopleInLineString = peopleInLine.join(", ");
      return (`The line is currently: ${peopleInLineString}`)
    } else if (katzDeliLine.length === 0){
        return ("The line is currently empty.")
        }
  }
