

var katzDeliLine = []


function takeANumber(katzDeliLine, name){

  katzDeliLine.push(name);

  var number = 1 + (katzDeliLine.indexOf(name));
  return 'Welcome, '+ name + '. You are number ' + number + ' in line.'
}


function nowServing(katzDeliLine){

  if(katzDeliLine.length === 0){
    return "There is nobody waiting to be served!";
  } else {
  return "Currently serving " + katzDeliLine.shift()+ ".";
  }

}


function currentLine(katzDeliLine){

  var statement = "The line is currently: "

  if(katzDeliLine.length === 0){
    return "The line is currently empty.";
  } else {

    statement += "1. " + katzDeliLine[0];

    for (var i = 1; i < katzDeliLine.length; i++) {
      var customer = katzDeliLine[i];

      statement +=  ", " + (1 + i) + ". " + customer
    }

    return statement;

  }

}
