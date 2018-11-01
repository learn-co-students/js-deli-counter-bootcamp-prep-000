var takeANumber = function(katzDeliLine, name){
  katzDeliLine.push(name);
  var queueLength = katzDeliLine.length;
  return "Welcome, " + name +". You are number " + queueLength +" in line.";
};

var nowServing = function(katzDeliLine){
  var lineOutput;
  if (katzDeliLine.length >= 1){
    lineOutput = "Currently serving " + katzDeliLine[0] +".";
    katzDeliLine.shift();
  } else {
    lineOutput = "There is nobody waiting to be served!";
  }
  return lineOutput;
};

var currentLine = function(katzDeliLine){
  var msg;
  if(katzDeliLine.length >= 1){
  var queueMsg = "The line is currently: ";
  for (var i = 0; i < katzDeliLine.length; i++){
    queueMsg +=  i+1 + ". " + katzDeliLine[i] +", ";
  }
  msg = queueMsg.slice(0, queueMsg.length-2);
  } else{
    msg = "The line is currently empty.";
  }
  return msg;
};