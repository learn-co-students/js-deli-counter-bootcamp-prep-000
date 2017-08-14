var katzDeliLine = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return 'Welcome, ' + name + '. You are number ' + (katzDeliLine.length) + ' in line.';
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length === 0){
    return "There is nobody waiting to be served!";
  }else {
  var serve = katzDeliLine.shift();
  return 'Currently serving '+ serve + '.';
  }
}

function currentLine(line) {
  var string = "";
    if(line.length ===0){
    return "The line is currently empty.";
  } else {
    for (var i = 0; i < line.length; i++) {
      if (i===line.length-1) {
        string += (i+1) +'. ' + line[i];
      }else{
     string += (i+1) +'. ' + line[i]+', ';
}    }
    return "The line is currently: " + string;

  }

}
