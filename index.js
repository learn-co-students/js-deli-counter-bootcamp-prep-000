

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  var length = katzDeliLine.length;
    return `Welcome, ${[name]}. You are number ` + length + ' in line.'
  }




function nowServing(deliLine){
    if (deliLine.length > 0){
    return "Currently serving " + deliLine.shift() + ".";
  } else {
  return 'There is nobody waiting to be served!';
  }
}


function currentLine(katzDeliLine){
  if (katzDeliLine.length > 0) {
    for (var i = 0; i < katzDeliLine.length; i=3) {
      var string = `${i+1}. ` + katzDeliLine[i] + ", " + `${i+2}. ` + katzDeliLine[i+1] + ", " + `${i+3}. ` + katzDeliLine[i+2];
    }
    return "The line is currently: " + string;
    }
    else {
    return "The line is currently empty.";
  }
}
