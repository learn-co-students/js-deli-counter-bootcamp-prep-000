

function takeANumber (katzDeliLine, name) {
   katzDeliLine.push(name);
   return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing (katzDeliLine){
  if (katzDeliLine.length == 0){
    return "There is nobody waiting to be served!";
  }
  else {
    var a = katzDeliLine[0];
    katzDeliLine.shift();
    return `Currently serving ${a}.`;

  }
}

function currentLine (katzDeliLine){
  if (katzDeliLine.length == 0){
    return "The line is currently empty.";
  }
  else {

    var names = "";
    for (var i = 0 ; i< katzDeliLine.length ; i++){
          names = names + `${i+1}` + ". " + katzDeliLine[i] +
          (i === katzDeliLine.length-1 ? "" :", ");
    }
    return  (`The line is currently: ${names}`);

  }
}
