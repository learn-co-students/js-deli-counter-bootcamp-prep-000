var katzDeli = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  var pos = katzDeliLine.length;
  return `Welcome, ${name}. You are number ${pos} in line.`;
}

function nowServing(line){
  if (line.length == 0){
    return "There is nobody waiting to be served!";
  } else {
    var first = line[0];
    line.shift();
    return `Currently serving ${first}.`;
  }
}

function currentLine(line){
  if (line.length == 0){
    return "The line is currently empty.";
  } else {
    var list = "The line is currently:";
    for (var i = 0; i < line.length; i++){
      var curr = i + 1;
      if (i == line.length - 1) {
        list = `${list} ${curr}. ${line[i]}`;
      } else {
        list = `${list} ${curr}. ${line[i]},`;
      }
    }
    return list;
  }
}