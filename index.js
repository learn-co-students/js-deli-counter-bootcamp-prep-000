var katzDeli = [];

function takeANumber(theLine, name){
  var pos = theLine.push(name);
  return `Welcome, ${name}. You are number ${pos} in line.`
}

function nowServing(theLine){
  if(theLine.length < 1){
    return "There is nobody waiting to be served!"
  }else {
    var name = theLine.shift()
    return `Currently serving ${name}.`
  }

}

function currentLine (theLine){
  if(theLine.length < 1){
    return "The line is currently empty."
  }else {
    var i =0;
    var temp =""
    while(theLine[i]){
      var name = theLine[i]
      temp = temp + `${i+1}. ${name}, `
      i++
    }
    temp = temp.slice(0, temp.length-2)
    temp = "The line is currently: " + temp
    return temp
  }
}
