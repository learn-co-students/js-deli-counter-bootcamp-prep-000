var katzDeli = [];
function takeANumber(line, name){
  line.push(name)
  console.log("Welcome, "+ name +". You are number "+ line.length +" in line.")
  return "Welcome, "+ name +". You are number "+ line.length +" in line."
}
takeANumber(katzDeli, "Ada")
takeANumber(katzDeli, "Grace")
takeANumber(katzDeli, "Kent")
function nowServing(line){
  if(!line.length){
    console.log("There is nobody waiting to be served!")
    return "There is nobody waiting to be served!"
  }else {
    return "Currently serving " + line.shift() + "."
  }
}
function currentLine(line){
  if(!line.length){
    console.log("The line is currently empty.")
    return "The line is currently empty."
  }
  var nameAndNumbers = []
  for (var i = 0; i < 3; i++){
    nameAndNumbers.push(i+1 + ". " + line[i])
  }
  console.log("The line is currently: "+ nameAndNumbers + ", ")
  return "The line is currently: "+ nameAndNumbers.join(", ")
}