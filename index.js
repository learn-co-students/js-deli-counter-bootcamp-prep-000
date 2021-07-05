function takeANumber(katzDeliLine,person){
  katzDeliLine.push(person);
  var i = katzDeliLine.indexOf(person) + 1;
  return `Welcome, ${person}. You are number ${i} in line.`
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length > 0) {
    return "Currently serving " + katzDeliLine.shift() + ".";
  }
  else{
    return "There is nobody waiting to be served!";
  };
}

function currentLine(line){
  if(line.length === 0){
    return "The line is currently empty.";
  }else{
    var i;
    var string = "";
    for(i=1;i<line.length;i++){
      string = string + i + ". " + line[i-1] + ", ";
    };
    return "The line is currently: " + string + line.length + ". " + line[line.length-1];
  };
}
