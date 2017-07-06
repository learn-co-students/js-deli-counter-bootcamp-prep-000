function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  var greeting = 'Welcome, ' + name + '. You are number ' +katzDeliLine.length + ' in line.';
  return greeting;
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length === 0){
    return 'There is nobody waiting to be served!';
  }
  else if(katzDeliLine.length > 0){
    var str = 'Currently serving ' + katzDeliLine[0] + '.';
    katzDeliLine.shift();
    return str;
  }
}

function currentLine(katzDeliLine){
  if(katzDeliLine.length === 0){
    return 'The line is currently empty.';
  }
  else if(katzDeliLine.length >0){
    var str = 'The line is currently: ';
    for(var i = 0; i<katzDeliLine.length; i++){
      if(i === 0){
        str = str.concat('1. ' + katzDeliLine[i])
      }
      else{
        var place = parseInt(i) + 1;
        str = str.concat(', ' + place + '. ' + katzDeliLine[i]);
      }
    }
    return str;
  }
}
