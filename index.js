function takeANumber(line, name){
  line.push(name);
  return ('Welcome, ' + name + '. You are number '+ line.length + ' in line.')
}

function nowServing (katzDeliLine){
  if (katzDeliLine.length===0){
    return ("There is nobody waiting to be served!")
  }
  else {
    var first = (katzDeliLine[0]);
    katzDeliLine.shift (first);
  return ('Currently serving ' +first+'.');
}
}

function currentLine(katzDeliLine) {

  if (katzDeliLine.length===0){
    return ("The line is currently empty.")
  }
  var string = 'The line is currently: ';
  for (var i = 0; i < katzDeliLine.length; i++){
    var name = katzDeliLine[i]
    string +=[ (i+1) + '. '+name+', '];
  }
  var finalString = string.substring(0, string.length-2)
    return finalString
  }
