var katzDeli = [];

function takeANumber(katzDeliLine,name) {
  var position = katzDeliLine.length+1;
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${position} in line.`
}

function nowServing(katzDeliLine) {
  if(katzDeliLine.length===0) {
    return "There is nobody waiting to be served!"
  } else {
    var first = katzDeliLine[0];
    katzDeliLine.shift();
    return `Currently serving ${first}.`;
  }
}

function currentLine(katzDeliLine) {
  if(katzDeliLine.length===0) {
    return "The line is currently empty.";
  } else {
    var string = "The line is currently: "
    for(var i=0;i<katzDeliLine.length;i++) {
      var number = i+1;
      if(i>0) {
        string = string+", ";
      }
      string = string+number+". "+katzDeliLine[i];
    }
    return string;
  }
}
