var katzDeli = [];

function takeANumber(katzDeliLine,name){
  katzDeliLine.push(name);
  var position = katzDeliLine.length
  return "Welcome, " +name+ ". You are number "+position+" in line."
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    return "Currently serving " + katzDeliLine.shift() +".";
  };
};

function currentLine(line) {
  var array = [];
  var n=1;
  if(line.length === 0) {
    return "The line is currently empty."
  } else {
    for(let i=0; i<line.length; i++) {
      array.push(" "+n +". "+line[i])
      n++
    }
    return "The line is currently:"+array.join();
  }
}
