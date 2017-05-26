var katzDeli = [];

function takeANumber(line, name){
  line.push(name);
  var number = line.length;
  return `Welcome, ${name}. You are number ${number} in line.`
}

function nowServing(line){
  if(line.length > 0){
    var now = line.shift();
    return `Currently serving ${now}.`;
  } else if (line.length === 0) {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(line){
  var lineNow = "The line is currently:";

  if (line.length > 0){
    for(var i = 0; i < line.length; i++){
      lineNow = lineNow + ` ${i+1}. ${line[i]}`
      lineNow = lineNow + ",";
    }
  } else{
    return "The line is currently empty.";
  }
  
  var lineNew = lineNow.substring(0, lineNow.length-1);
  return lineNew;

}
