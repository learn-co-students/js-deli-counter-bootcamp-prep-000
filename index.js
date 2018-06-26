var katzDeli = [];

function takeANumber(katzDeliLine, name) {
    katzDeliLine.push(name);
    var i = katzDeliLine.length;
    return (`Welcome, ${name}. You are number ${i} in line.`)
  }

function nowServing(deliLine, name){
  var i = deliLine.length;
  if (deliLine.length == 0) {
    return ("There is nobody waiting to be served!")
  } else {
    var customer = deliLine.shift();
    return (`Currently serving ${customer}.`)
  }
}

function currentline(katzDeliLine){
  if (katzDeliLine.length === 0){
    return ("The line is currently empty.")
  } else {
    var customer = [];
    for(var i = 0; katzDeliLine.length > 0; i++){
      customer.push(`${i+1}. ${customer{i}}`);
    }
    return ("the line is currently:" + customer; )
  }
}
