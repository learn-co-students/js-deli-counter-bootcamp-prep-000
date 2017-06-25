var katzDeli = [];

function takeANumber(katzDeliLine,name){
  var newDeliLine = [];
  katzDeliLine.push(name);
  newDeliLine = katzDeliLine;
  return `Welcome, ${name}. You are number ${newDeliLine.length} in line.`
}

function nowServing(katzDeliLine){
  var currentCustomer = "";
  if (katzDeliLine.length > 0){
      currentCustomer = katzDeliLine.shift();

      return `Currently serving ${currentCustomer}.`
  }
  else{
      return "There is nobody waiting to be served!"
  }
  }

function currentLine(katzDeliLine){
  var currentNamesAndPositions = "The line is currently: ";
  var currentPosition = 0;
  if (katzDeliLine.length > 0){
    for(var customer = 0; customer < katzDeliLine.length;customer++){
      currentPosition = customer + 1
      currentNamesAndPositions+= currentPosition+". "+katzDeliLine[customer]+ ", ";
      }
    return currentNamesAndPositions.substring(0,currentNamesAndPositions.length-2); //-2 since there's a space in our bizzarre concat sequence.
  }
  else {
    return "The line is currently empty.";
  }
}
