
function takeANumber(katzDeliLine,name){
  katzDeliLine.push(name);
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line."
  }

  function nowServing(katzDeli){
  if (katzDeli.length === 0){
    return "There is nobody waiting to be served!"
  }else{
    var response = "Currently serving " + katzDeli.shift() + "."
    return response;
  }
}

  function currentLine(katzDeliLine) {
    var newArray = [];
    for(let i=0; i<katzDeliLine.length; i++){
      newArray.push(` `+[i+1]+`. `  + katzDeliLine[i]);
    }
    if (katzDeliLine.length===0){
      return "The line is currently empty.";
    } else {
      return ('The line is currently:' +newArray);
    }
  }
