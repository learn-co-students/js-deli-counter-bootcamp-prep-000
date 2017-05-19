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

//loops
/*function currentLine(array){
  let list = []
  if(array.length > 0){
    for(let i = 0; i < array.length; i++){
      list.push(" " + (i+1) + ". " + array[i]);
  }
return("The line is currently:" + list);
}
  else {return("The line is currently empty.");
    }
  }*/

//recursion
var i = 0;
function currentLine(array){
  if(array.length > 0){
      if(i >= array.length){
      return ("The line is currently:" + array);
    }else{
      array[i] = " " + (i+1) + ". " + array[i]
      i++;
      return currentLine(array)
    }
  }else{
    return("The line is currently empty.");
  }
}
