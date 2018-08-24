function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine){
  /*while(katzDeliLine.length > 0){
    	console.log(`Currently serving ${katzDeliLine[0]}.`);
    	katzDeliLine.shift();
  }*/
  if(katzDeliLine.length > 0){
    var current = katzDeliLine[0];
    katzDeliLine.shift();
    return `Currently serving ${current}.`;
  }else{
    return "There is nobody waiting to be served!";
  }
}

function currentLine(katzDeliLine){
  if(katzDeliLine.length > 0){
    var text = '';
    for(var i = 0; i < katzDeliLine.length; i++){
      text += `${i+1}. ${katzDeliLine[i]}`;
      if(i != katzDeliLine.length - 1){
        text += ', ';
      }
    }
    text = `The line is currently: ${text}`;
    return text
  }else{
  	return "The line is currently empty."
  }
}