import { listenerCount } from "cluster";

function takeANumber (line, name){
  let newLine =  line.push(name);
  return "Welcome, " + name + ". You are number " +  line.length +  " in line.";
}


function nowServing(katzDeliLine){
  if(katzDeliLine.length === 0){
    return "There is nobody waiting to be served!"
  } else {
    let current = katzDeliLine[0]
    katzDeliLine.shift()
    return `Currently serving ${current}.`
  }
}

function currentLine(line){
  if(line.length === 0) {
    return "The line is currently empty."
  } else {
    let final = "The line is currently: "
    line.forEach(function(name, index){
      final = final + `${index + 1}. ${name}, `
    })
    return final.slice(0, -2)
  }
}