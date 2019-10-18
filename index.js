var katzDeliLine = [];
function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line."
}
function nowServing(line){
  if (line.length > 0){
    var katz = line.shift();
    return "Currently serving " + katz + "."

  }
else {
  if (line.length === 0){
    return "There is nobody waiting to be served!"}
}
}


function currentLine(line) {
  if(line.length === 0) {
    return "The line is currently empty."
  }
  else {
    var statement = "The line is currently: "
    for (var i = 0; i < line.length; i++){

      if (i === line.length - 1){
         statement +=   [i + 1] + ". " + line[i] }
        else{

       statement += [i + 1] + ". " + line[i] + ", "}
    }
  }
  return statement

}
