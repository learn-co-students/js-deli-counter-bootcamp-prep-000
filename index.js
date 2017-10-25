var katzDeli = [];
function takeANumber(line, name){
  line.push(name);
  return "Welcome, " + name + ". You are number " + line.length + " in line."
}
function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0){
    return "There is nobody waiting to be served!";
  } else {
    var name = katzDeliLine.shift();
    return "Currently serving " +  name + '.';
    }
}
function currentLine(katzDeliLine){
  var arr = [];
  for (var i = 0; i < katzDeliLine.length; i += 1) {
    arr.push((i + 1) + '. ' + katzDeliLine[i]);
  }
  if (arr.length === 0){
    return "The line is currently empty.";
  } else {
    return "The line is currently: " + arr.join(', ');
  }
}
