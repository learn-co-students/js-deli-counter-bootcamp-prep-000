var katzDeli = [];

function takeANumber(currentLine, ...newPerson) {
    var resultArray = [...currentLine];
    var greeting;
    var index;
    for (var i = 0; i < newPerson.length; i++) {
        resultArray.push(newPerson[i]);
        index = resultArray.indexOf(newPerson[i]) + 1;
        console.log("Welcome, " + newPerson[i] + ". You are number " + index + " in line." );
    }
    return resultArray;
}

function nowServing(currentLine){
  if (currentLine[0] === undefined){
    return "There is nobody waiting to be served!"
  } else {
    return "Currently serving " + currentLine[0] + ".";
    currentLine.unshift();
  }
}

function currentLine(line) {
    var result = "The line is currently:";
    var position;
    if (line[0] === undefined) {
        return "The line is currently empty."
    } else {
        for (var i = 0; i < line.length; i++) {
            position = 1 + i;
            if (line[i + 1] === undefined){
              result += " " + position + ". " + line[i];
            } else {
              result += " " + position + ". " + line[i] + ",";
            }
        }
    }
    return result;
}
