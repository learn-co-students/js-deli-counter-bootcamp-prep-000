
var katzDeli = [];

function takeANumber(appArray, name){
  var info = appArray.push(name);
  var returnStr = `Welcome, ${name}. You are number ${info} in line.`;
  return returnStr;
}

function nowServing (appArray){
  returnStr = ''
  if(appArray.length > 1){
    returnStr = `Currently serving ${appArray[0]}`;
    appArray.shift();
  }else{
    returnStr = `There is nobody waiting to be served!`;
  }
  return returnStr;
}

function nowServing(appArray){
  var returnStr = ''
  if(appArray.length >= 1){
    returnStr = `Currently serving ${appArray[0]}.`;
    appArray.shift();
  }else{
    returnStr = "There is nobody waiting to be served!";
  }
  return returnStr;
}

function currentLine(appArray){
  var returnStr = "The line is currently: "
  if(appArray.length >= 1){
    for(var i = 0; i < appArray.length; i++){
      returnStr += `${i + 1}. ${appArray[i]}, `;
    }
      returnStr = returnStr.slice(0, -2)
  }else {
    returnStr = "The line is currently empty.";
  }
  return returnStr;
}
