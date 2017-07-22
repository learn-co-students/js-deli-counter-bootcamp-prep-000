function takeANumber(line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`;
}
function nowServing(line){
  if (line.length < 1)
    return "There is nobody waiting to be served!";
  var name = line.shift();
  return `Currently serving ${name}.`;
}
function currentLine(line){
  if (line.length < 1)
    return "The line is currently empty.";
  var str = new String;

  line.forEach(function(element, index){
    str += (index+1).toString() + ". " +element
    if (index < line.length-1)
      str += ", ";
  });
  return "The line is currently: " + str;
}
