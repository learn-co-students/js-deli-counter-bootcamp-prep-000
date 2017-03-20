function takeANumber(katzDeliLine, name){
  if(katzDeliLine.length === 0){
    katzDeliLine.push(name);
    return (`Welcome, ${name}. You are number 1 in line.`)
  }else if(katzDeliLine.length !== 0){
      katzDeliLine.push(name);
      return (`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`)
    }
}

function nowServing(katzDeliLine){
  if(!katzDeliLine.length){
    return "There is nobody waiting to be served!";
  }else{
    let katzDeliLine2 = katzDeliLine.shift();
    return (`Currently serving ${katzDeliLine2}.`)
  }
}

function currentLine(katzDeliLine){
  if(katzDeliLine.length === 0){
    return "The line is currently empty.";
  }else if(katzDeliLine.length !== 0){
    var text = "The line is currently: ";
    var text2 = ", "
    for(let i = 0; i<katzDeliLine.length; i++){
      if(i + 1 === katzDeliLine.length){
        text2 = "";
      }
      text += `${i + 1}. ${katzDeliLine[i]}${text2}`
    }
    return text
  }
}
