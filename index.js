var katzDeliLine = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  let n = katzDeliLine.length;
    return ("Welcome, " +name+ ". You are number " +n+ " in line.");
  }

function nowServing(array){
if(array.length > 0){
    let cus = array.shift();
    return("Currently serving " + cus + ".");
    }
    else {return("There is nobody waiting to be served!");
    }
  }

function currentLine(array){
  let list = []
  if(array.length > 0){
    for(let i = 0; i < array.length; i++){
      list.push(" " + (i+1) + ". " + array[i]);
  }
return("The line is currently:" + list);
}
  else {return("The line is currently empty.");
    }
  }
