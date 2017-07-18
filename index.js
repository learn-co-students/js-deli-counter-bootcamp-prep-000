function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  var text = 'Welcome, ' + name + '. You are number '+ katzDeliLine.length + ' in line.';
  return text;
}

//var katzDeliLine = [];
//takeANumber(katzDeliLine, "Adele");
function nowServing(katzDeliLine){
  var text;
  if(katzDeliLine.length === 0){
    text = "There is nobody waiting to be served!";
  }
  else {
    text = "Currently serving " + katzDeliLine[0] +".";
    katzDeliLine.shift();
    }
    return text;
}

function currentLine(katzDeliLine){
  var text;
  var n;
  if(katzDeliLine.length === 0){
    text = "The line is currently empty.";
  }
  else{
    text = "The line is currently: ";
    for (var i = 0; i< katzDeliLine.length; i++)
    {
      n = i + 1;
      text = text + n + ". " + katzDeliLine[i];
      if (i< katzDeliLine.length-1)
      {
        text = text + ', ';
      }
    }
  }
  return text;
}
