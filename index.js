var katzDeliLine = [];

function takeANumber(katzDeliLine, name)
{
  var i = katzDeliLine.length + 1;
  katzDeliLine.push(name);
  return (`Welcome, ${name}. You are number ${i} in line.`);
}

function nowServing(katzDeliLine)
{
  if (katzDeliLine.length > 0){
  var next = katzDeliLine[0];
  katzDeliLine.shift();
  return (`Currently serving ${next}.`);
  }

else {
  return ("There is nobody waiting to be served!");
  }
}

function currentLine(katzDeliLine)
{
  var newArray = [];
  function lineOrder(array){
    for (var i = 0; i < katzDeliLine.length; i++){
      newArray.push(` ${i + 1}. ${katzDeliLine[i]}`);
    }
    return newArray;
  }
  if (katzDeliLine.length > 0){
    return (`The line is currently:${lineOrder(newArray)}`);
  }
  else{
    return ("The line is currently empty.");
  }
}
