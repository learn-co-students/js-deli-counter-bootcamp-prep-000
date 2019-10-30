function takeANumber(line, name) {
    line.push(name);
    var jim = line.length;
    return "Welcome, "+name+". You are number "+ jim + " in line.";
}

function currentLine(line) {


    if(line.length == 0){
      return "The line is currently empty.";
    }
    return "The line is currently: 1. "+line[0]+ ", 2. "+line[1]+ ", 3. "+line[2];
}





function nowServing(line) {

  if(line.length == 0){
      return "There is nobody waiting to be served!";
  }
  var tyu = line[0];
  line.shift();
  //return "Currently serving "+line[0]+ ".";
  return "Currently serving "+tyu+ ".";

}
