function takeANumber(katzDeliLine,name){
   katzDeliLine.push(name)
  var index = katzDeliLine.length
  return `Welcome, ${name}. You are number ${index} in line.`
}
function nowServing(katzDeliLine){
  if (katzDeliLine.length>0){
    var firstperson = katzDeliLine[0]
    katzDeliLine.shift()
    return `Currently serving ${firstperson}.`
  }
  else {
    return "There is nobody waiting to be served!"
  }
}
function currentLine(line){
  var currentstr = "The line is currently: "
  var counter = 0
  if (line.length>0){
      
       while (counter<line.length - 1){
        var name = line[counter]
        counter++
        currentstr += `${counter}. ${name}, `
      }
    currentstr += `${line.length}. ${line[line.length - 1]}`
    return currentstr
  }
  
  else{
    return "The line is currently empty."
  
    }
}