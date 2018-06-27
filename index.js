var katzDeliLine=[];

console.log(takeANumber(katzDeliLine,"Fred"))
console.log(takeANumber(katzDeliLine,"Astaire"))



function takeANumber(array,name){
  array.push(name)
  var lineSize=array.length
  console.log(lineSize)
  console.log(array)
  var ans= "Welcome, "+array[array.length-1]+". You are number "+lineSize+" in line."
  return ans
}

function nowServing(array){
  var ans
  if (array.length>1){
  ans="Currently serving "+array.shift()+"."
  }else ans="There is nobody waiting to be served!"
  return ans
}

function currentLine(array){
  var response="The line is currently: ";

  if (array.length>=1){
    for (let i=0;i<array.length;i++){
      response=response+parseInt(i+1)+". "+array[i]
      if (i<array.length-1)
      {response=response+", "}
    }
  }else response="The line is currently empty."
  return response
}