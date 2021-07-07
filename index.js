function takeANumber(arr, name){
  arr.push(name)
  var lineN = arr.length;
  return "Welcome, " + name + ". You are number " + lineN + " in line."
}

function nowServing(arr){
  var message = "Currently serving "
  if (arr.length === 0){
    return "There is nobody waiting to be served!"
  } else {
      message += arr[0] + "."
      arr.shift()
      return message
  }
   
}

function currentLine(arr){
  var message = "The line is currently: "
  var i = 0
  var currentPossition = 0
  if(arr.length === 0){
    return "The line is currently empty."
  } else {
      for(i = 0; i < arr.length ; i++){
        currentPossition = i + 1
        if(currentPossition === arr.length){
          message += currentPossition + ". " + arr[i];
        } 
        else {
          message += currentPossition + ". " + arr[i] + ", "
        }
        
      }
      return message
  }
    
}