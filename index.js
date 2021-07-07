function takeANumber(line, name){
  line.push(name);
  return "Welcome, " + name + ". You are number " + line.length + " in line.";
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length > 0){
    let first = katzDeliLine.shift();
    return "Currently serving " + first + ".";
  }
  else{
    return "There is nobody waiting to be served!"
  }
}

function currentLine(line){
  let queue = "The line is currently: ";
  if (line.length === 0){
    return "The line is currently empty.";
  }
  else{
    for (let i = 0; i < line.length; i++){
      queue += (i+1) + ". " + line[i] +", "
    }
    let finalQueue = queue.slice(0, queue.length-2);
    return finalQueue;
  }
}