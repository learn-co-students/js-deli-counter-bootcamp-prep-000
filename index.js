
function takeANumber(line, newName){
  var string = `Welcome, ${newName}. You are number ${line.length + 1} in line.`;
  line.push(newName);
  return string;
}

function nowServing(line){
  if(line.length === 0){
    return "There is nobody waiting to be served!";
  }
  else{
    var string = "Currently serving " + line[0] + ".";
    line.shift();
    return string;
  }
}

function currentLine(line){
  if(line.length === 0)
  {
    return "The line is currently empty.";
  }
  else{
    var string = "The line is currently: "
    for(var i = 0; i < line.length - 1; i++){
      string += `${i+1}. ${line[i]}, `;
    }
    string += `${line.length}. ${line[line.length-1]}`;
    return string;
  }
}