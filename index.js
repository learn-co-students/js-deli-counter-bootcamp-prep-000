
var katzDeli = [];
var takeANumber = function(katzDeli, newCustomer) {

 if (katzDeli.length > 0);
     katzDeli.push(newCustomer);
     return ('Welcome, ' + newCustomer + '. You are number ' + katzDeli.length + ' in line.')
  }

  function nowServing(deliLine){
  if(deliLine.length === 0){
    return "There is nobody waiting to be served!"
  } else {
    return "Currently serving " + deliLine.shift() + ".";
  }
}

  function currentLine(deliLine){
    var deliStr = '';
    if(deliLine.length === 0){
      return "The line is currently empty."
    } else {
      for(var i=0;i<deliLine.length;i++){
        deliStr=deliStr+(deliLine.indexOf(deliLine[i])+1)+'. '+deliLine[i]+', ';
      }
      return "The line is currently: " + deliStr.slice(0,deliStr.length-2);
    }
  }
