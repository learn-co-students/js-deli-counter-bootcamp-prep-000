function takeANumber(katzDeliLine,person){
  katzDeliLine.push(person);
  var greeting = 'Welcome, ' + person + '. You are number ' + katzDeliLine.length + ' in line.'
  return greeting;
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length === 0){
    return "There is nobody waiting to be served!";
  }else{
    var customer = [...katzDeliLine];
    katzDeliLine.shift();
    return "Currently serving " + customer[0] + '.';
  }
}

function currentLine(katzDeliLine){
  if(katzDeliLine.length === 0){
    return "The line is currently empty.";
  }else{
    for(var i = 0; i < katzDeliLine.length; i++){
      katzDeliLine[i] =i+1 + '. ' + katzDeliLine[i];
    }
    return "The line is currently: " + katzDeliLine.join(', ');
  }
}
