

function takeANumber(katzDeliLine, personName){
  var i = katzDeliLine.length;
  katzDeliLine.push(personName);
  if(katzDeliLine[i] = personName){
    return("Welcome, " + personName + "." + " You are number " + (i+1) + " in line.")
  }
  i++;
}

function nowServing(array){
  if(array.length === 0){
    return("There is nobody waiting to be served!");
  }
  else{
    var a = array[0];
    array.shift(a);
    return("Currently serving " + a + ".");
  }
}

function currentLine(array){
  if(array.length === 0){
      return("The line is currently empty.");
    }
  else{
    var a = "The line is currently: ";
    for(var i = 0; i < array.length; i++){
      if(i < array.length-1){
        var b = array[i];
        a+=((i+1) + ". " + b + ", ");
      }
      else{
        var b = array[i];
        a+=((i+1) + ". " + b );
      }
    }
  return(a);
  }
}
