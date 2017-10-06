var katzDeliLine = [];

function takeANumber(katzDeliLine, name){
  var str = "";
  katzDeliLine.push(name);
  for(let i = 0; i < katzDeliLine.length; i++){
    if(katzDeliLine[i] === name){
      var str = `Welcome, ${name}. You are number ${i+1} in line.`
    }
  }
  return str;
}

function nowServing(katzDeliLine){
  let str = "";
  if(katzDeliLine.length > 0){
    let name = katzDeliLine[0];
    str = `Currently serving ${name}.`
    katzDeliLine.shift();
  } else {
    str = "There is nobody waiting to be served!"
  }
  return str;
}

function currentLine(line){
  let str = "";
  if(line.length > 0){
    str = "The line is currently: "
    for(let i = 0; i < line.length; i++){
      str += `${i + 1}. ${line[i]}`
      if(i < line.length - 1){
        str += ", "
      }
    }
  } else {
    str = "The line is currently empty."
  }
  return str;
}
