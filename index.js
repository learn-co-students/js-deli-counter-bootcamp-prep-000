function takeANumber(line,name){
    line.push(name)
	var order={}
	for (var i=0;i<line.length;++i){
		order[line[i]]=i+1
    }
    return "Welcome, " + name + ". You are number " + order[name]+ " in line."
}
function nowServing(array){
	if (array.length===0) {
		return "There is nobody waiting to be served!"
    } else {
		var current=array.shift()
    return "Currently serving " + current + "."
    }
}
function currentLine(array){
  if (array.length===0){
    return "The line is currently empty."
  } var current=[]
  for (var i=0;i<array.length;++i){
    current.push(i+1 + ". " + array[i])
  }
  return "The line is currently: " + current.join(", ")
}
