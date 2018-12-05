let arry = []
function takeANumber (arry, name){
  count ++;
  let ans = ("Welcome, " + name + ". You are number " + (arry.length + 1) + " in line.");
  arry.push(name)
  return ans
}

function nowServing(arry){
  if(arry.length!==0){
  return "Currently serving " + arry.shift() +"."
  } else{
    return "There is nobody waiting to be served!"
  }
}

function currentLine(arry){
  let ans = "The line is currently: "
  if(arry.length>0){
    for (let i = 0; i<arry.length; i ++){
    ans += (i+1 + ". " + arry[i] +", ") 
    }
    ans = ans.substring(0, ans.length-2);
  return ans
  } else {
    return "The line is currently empty."
  }
}

