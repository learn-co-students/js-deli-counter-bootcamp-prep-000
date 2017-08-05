function takeANumber(katzDeliLine, name){
  var before = katzDeliLine.length;
  katzDeliLine.push(name);
  for (var before; before<katzDeliLine.length; before++){
    var say="";
    say = say + `Welcome, ${katzDeliLine[before]}. You are number ${before+1} in line.`;
  }
  return say;
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length>0){
    var first = katzDeliLine[0];
    katzDeliLine.shift();
    return "Currently serving "+first +".";
  }
  else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine){
  if (katzDeliLine.length>0){
    var count = 0;
    var say = "The line is currently:";
    do { say = `${say} ${count+1}. ${katzDeliLine[count]}`;
    if (count+1 === katzDeliLine.length){
    return say;
    }
    else {
      say = say+","
    }
    count ++;
  } while (count < katzDeliLine.length)
  return say;
  }
  else {
    return "The line is currently empty."
  }
}
