function takeANumber(katzDeliLine, name){
    katzDeliLine.push(name);
        return ("Welcome, "+ name + ". You are number " + katzDeliLine.length + " in line.");
          var katzDeliLine = []
}

function nowServing(array){
      if (array.length > 0){
        return ("Currently serving " + array.shift() + ".")
      } else {return "There is nobody waiting to be served!"
    }
}


function currentLine(array){
  var i = 0
  var n = []
    if (array.length >0){
      while(i < array.length){
      n.push(" "+(i+1)+". "+array[i])
      i++;}
    return ("The line is currently:" + n)
  }else{return "The line is currently empty."
}
}
