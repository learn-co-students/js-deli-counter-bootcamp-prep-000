function takeANumber(arr,st){
  arr.push(st)
  return ("Welcome, " + st +". You are number " + arr.length + " in line.")
}

function nowServing(arr){
  if(arr.length){
    var ans = arr[0]
    arr.shift()
    return ("Currently serving "+ ans + ".")
  }
  else return "There is nobody waiting to be served!"
}

function currentLine(arr){
  if(arr.length){
    var ans = "The line is currently: "
    for (let i=0;i<arr.length;i++){
      ans = ans + (i+1) + ". " + arr[i] + ", "
    }
    ans = ans.slice(0,ans.length-2)
    return ans
  }
  else return "The line is currently empty."
}
