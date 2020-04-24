function takeANumber (currentLine, customerName){
  console.log(currentLine.length)
  currentLine.push(customerName);

  return "Welcome, " + customerName + ". You are number " + ((currentLine.length)) + " in line.";
}

function nowServing (currentLine){
  
  if(currentLine.length > 0){
    var announcement = "Currently serving " + currentLine[0] + ".";
  } else{
    announcement = "There is nobody waiting to be served!";
  }
  
  currentLine.shift();
  return announcement;
  
}

function currentLine (line) {
  var annouceAllWaiting = "The line is currently:" ;
  
  for (let i = 0; i < line.length; i++){
    annouceAllWaiting = annouceAllWaiting + " " + ((i +1) + ". " + line[i]);
    if( (i+1) != line.length){
      annouceAllWaiting = annouceAllWaiting + ",";
    }
  }
    if(line.length == 0){
      annouceAllWaiting = "The line is currently empty.";
    }
  return annouceAllWaiting;
}