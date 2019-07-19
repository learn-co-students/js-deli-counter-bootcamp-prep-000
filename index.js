var katzDeliline = [];
function takeANumber(katzDeliline, name){
  katzDeliline.push(name);
  return "Welcome, " + name + ". You are number " +  katzDeliline.length + " in line.";
  
}

function nowServing(katzDeliline){
  if(katzDeliline.length > 0){
    var current = katzDeliline[0];
    katzDeliline.splice(0,1);
    return "Currently serving " + current + ".";
  }else{
    return "There is nobody waiting to be served!"
  }
}
function currentLine(katzDeliline){
  var counter = 0;
  var sentence = "";
  if(katzDeliline.length > 0){
    while (counter < katzDeliline.length){
      sentence = (counter + 1) + ". " + katzDeliline[counter] + ", ";
    }
  }else{
    return "The line is currently empty.";
  }
  return "The line is currently: " + sentence
}