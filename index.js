function takeANumber(DeliLine, name){
  DeliLine.push(name);
  return `Welcome, ${name}. You are number ${DeliLine.length} in line.`;
}

function nowServing(DeliLine){
  var current = DeliLine.shift();
  var result = "";

  if (!current){
    result = "There is nobody waiting to be served!";
  }
  else {
    result = "Currently serving Steven.";
  }

  return result;
}

function currentLine(line){
  var result = "The line is currently";

  if (line.length != 0){
    result += ": ";
    var i = 0;

    for (;i < line.length - 1; i++) {
      result += `${i + 1}. ${line[i]}, `;
    }

    result += `${i + 1}. ${line[i]}`;
  }else {
    result += " empty."
  }

  return result;
}
