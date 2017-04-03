var katzDeli = [];
function takeANumber (array,name){
    array.push(name);
    return "Welcome, "+name+". You are number "+ array.length+" in line."
}
function nowServing (array){
  if (array.length === 0){
        return "There is nobody waiting to be served!"
  } else {
        return "Currently serving "+array.shift()+"."
  }
}
function currentLine (array) {
  if (array.length === 0){
        return "The line is currently empty."
  } else {
      var line = "The line is currently: "
      var i=1
      var length = array.length-1
      for (var n=0; n<length; n++) {
        line=line+i+". "+array.slice(n,i)+", "
        i++
      }
      line=line+i+". "+array.slice(n,i)
      return line
    }
  }
