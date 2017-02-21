function takeANumber(line,personName) {
  line.push(personName);
  return `Welcome, ${personName}. You are number ${line.length} in line.`;
}

function nowServing(line) {
  if (line.length==0) {return "There is nobody waiting to be served!"}
  else {
    var serving = "Currently serving " + line[0] + ".";
    line.shift();
    return serving;
  }
}

function currentLine(line) {
  if (line.length==0) {return "The line is currently empty."}
  else {
    var names="";
    for (var i=0;i<line.length;i++) {
      names = names + " " + (i+1) + ". " + line[i] + ",";
    }
    return "The line is currently:" + names.substring(0,names.length-1);
}
}
