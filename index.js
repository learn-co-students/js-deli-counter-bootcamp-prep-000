var katzDeliLine = [];

function takeANumber(lineArr, name) {

  var position = lineArr.push(name);
  var str = `Welcome, ${name}. You are number ${position} in line.`;
  //return "Welcome, "+name +". You are number " + ${position+1} + " in line.";
  return str;
}

function nowServing(lineArr) {
  if (lineArr.length > 0)
    return `Currently serving ${lineArr.shift()}.`;
  else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(lineArr) {
  var len = lineArr.length;
  if(len == 0)
    return "The line is currently empty.";
  else {
      var str = "The line is currently:";
      for(let i=0;i<len;i++){
        str+=` ${i+1}. ${lineArr[i]}`;
        if(i < len-1)
          str+=",";
      }
    }
    return str;
}
