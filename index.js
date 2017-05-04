var katzDeli = [];

function takeANumber(katzDeliLine, newName){
  katzDeliLine.push(newName);//this adds to end of array
  //for (let i = 0; i<katzDeliLine.length; i++){

        return "Welcome, " +newName+ ". You are number " + katzDeliLine.length + " in line.";
    //  }
  //  }
}

//use shift here
function nowServing(katzDeliLine){
if(katzDeliLine.length>0){
  return "Currently serving " + katzDeliLine.shift() + '.';
}else{
  return "There is nobody waiting to be served!";
}
}


function currentLine(katzDeliLine){
  var lineCallOut =[];
  for(let i=0; i<katzDeliLine.length; i++){
    lineCallOut.push(' ' + (i+1)+'. '+katzDeliLine[i]);
  }
    if (katzDeliLine.length>1){
    return "The line is currently:"+lineCallOut;
  }else {
  return "The line is currently empty.";
}
}
