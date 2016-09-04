function takeANumber(line, name){
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`;
}

function nowServing(line){
  if(line.length > 0){
    var current = line.shift();
    return `Currently serving ${current}.`;
  }
  return "There is nobody waiting to be served!";

}

function currentLine(line){
  if(line.length < 1){
    return "The line is currently empty.";
  }
  var returnString = "The line is currently:";
  for (var i = 0, n = line.length; i < n; i++){
    returnString += ` ${i + 1}. ${line[i]},`;
  }
  //returning all but last comma
  return returnString.slice(0, -1);
}
