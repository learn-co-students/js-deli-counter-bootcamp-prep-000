
var katzDeliLine = [];

function takeANumber(katzDeliLine, name){

  katzDeliLine.push(name)
  return(`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`)

  return katzDeliLine;

}

//---------------------------------------------------

function nowServing(katzDeliLine){

var stringOb = [];

  if(katzDeliLine.length > 0){
    stringOb = [`Currently serving `];
//    return stringOb;
    stringOb += katzDeliLine.shift();
    return (stringOb + ".");
  } else {
      return "There is nobody waiting to be served!";
  }


// katzDeliLine = katzDeliLine.slice(1)
}


//-------------------------------------------------

//length+1 WORKED

function currentLine(katzDeliLineline){

  var place = [];

   if(katzDeliLineline.length > 0){
     for (let n = 1; n <= katzDeliLineline.length; n++){
       if(n == 1){
          place = [...place, `${n}. ${katzDeliLineline[n-1]}`]
       } else{
          place = [...place, ` ${n}. ${katzDeliLineline[n-1]}`]
    }
    }
  } else {
      return("The line is currently empty.");
  }

  return(`The line is currently: ${place}`)
}
