
//apend new person to back of line
//return message 

function takeANumber(deliLine, person){
  deliLine.push(person);
  return `Welcome, ${person}. You are number ${deliLine.length} in line.`;
}


function nowServing(katzDeliLine){
  if(katzDeliLine.length === 0){
    return "There is nobody waiting to be served!";
  }else{
    var currentCustomer = katzDeliLine.shift();
    return `Currently serving ${currentCustomer}.`;
  }
}

function currentLine(katzDeliLine){
  var string = "The line is currently:";
  var order = [];
  if(katzDeliLine.length === 0){
    return "The line is currently empty.";
  } else{

    for(let i=0; i<katzDeliLine.length; i++){
      order[i]=` ${i+1}. ${katzDeliLine[i]}`
    }
  }
  return string + order
}