var katzDeliLine=["Ada", "Grace", "Ben"];                   //Current Guests already waiting in line

function takeANumber(katzDeliLine,name="Guest"){            //
    katzDeliLine.push(name)
    console.log(`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`)
    return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(line){
 if( line.length===0){
   console.log("There is nobody waiting to be served!")
   return "There is nobody waiting to be served!"
  }else{
    console.log(`Currently serving ${line.shift()}.`)
    //return `Currently serving ${line.shift()}.`
   }
}

function currentLine(line){
  if(line.length===0){
    console.log("Line is currently empty")
    //return "The line is currently empty."
  }else{
    var newLine = [];
    //line.forEach(function(item,index){newLine.push(` ${index+1}. ${item}`)} )
    for(var i=0; i<line.length; i++){
      newLine.push(` ${i}. ${line[i]}`)
    }
    console.log(`The line is currently:${newLine}`)
    return `The line is currently:${newLine}`
  }
}

takeANumber(katzDeliLine,"Kent")
nowServing(katzDeliLine)
nowServing(katzDeliLine)
nowServing(katzDeliLine)
currentLine(katzDeliLine)
takeANumber(katzDeliLine,"Jessica")
nowServing(katzDeliLine)
currentLine(katzDeliLine)
