var katzDeliLine = [];

function takeANumber(array, name){
  array.push(name);
  return "Welcome, " + name + ". You are number " + array.length + " in line.";
}

function nowServing(array){
  if(array.length > 0) {
    let serving = "Currently serving " + array[0] + ".";
    array.splice(0,1);
    return serving;
  }
  else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(array){
  let line = "The line is currently: ";
  if(array.length > 0){
    for(let i = 0; i<array.length; i++){
      if(i<array.length-1){
        line += (i+1 + ". " + array[i] + ", ");
      }
      else {
        line += (i+1 + ". " + array[i]);
      }
    }  
  }
  else {
    line = "The line is currently empty.";
  }
  return line;
}



//takeANumber(katzDeliLine, "a");
//takeANumber(katzDeliLine, "b");
//takeANumber(katzDeliLine, "c");
//takeANumber(katzDeliLine, "d");
//takeANumber(katzDeliLine, "e");
//takeANumber(katzDeliLine, "f");
//takeANumber(katzDeliLine, "g");
//takeANumber(katzDeliLine, "h");
//console.log(takeANumber(katzDeliLine, "j"));
//console.log(nowServing(katzDeliLine));
//console.log(currentLine(katzDeliLine));