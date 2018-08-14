function takeANumber(curr,name){
  curr.push(name)
  return `Welcome, ${name}. You are number ${curr.length} in line.`
}

function nowServing(curr){
  if(curr.length > 0){
    var first = curr[0]
    curr.shift()
    return `Currently serving ${first}.`
  }
  else{
    return "There is nobody waiting to be served!"
  }
}

function currentLine(curr){
  var output = "The line is currently: "
  if(curr.length>0){
  for(var x = 0;x<curr.length-1;x++){
  output  += `${x+1}. ${curr[x]}, `
  }
  output += `${curr.length}. ${curr[curr.length-1]}`
    return output;
  }
  else{
    return "The line is currently empty."
  }
}