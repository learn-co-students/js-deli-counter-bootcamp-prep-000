var katzDeliLine = [];
function takeANumber(katzDeliLine,person){
  katzDeliLine.push(person);
  var number = katzDeliLine.indexOf(person) +1;
  return (`Welcome, ${person}. You are number ${number} in line.`);
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length > 0){
    var first_person = katzDeliLine[0]
    katzDeliLine.shift(first_person);
    return(`Currently serving ${first_person}.`);
  }
  else{
    return ("There is nobody waiting to be served!");
  }
}

function currentLine(katzDeliLine){
  if (katzDeliLine.length >0){
    return (`The line is currently: 1. ${katzDeliLine[0]}, 2. ${katzDeliLine[1]}, 3. ${katzDeliLine[2]}`);
  }else {
    return ("The line is currently empty.")
  }
}