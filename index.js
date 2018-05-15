
function takeANumber(katzDeliLine, name){
var line = katzDeliLine.length + 1
katzDeliLine.push(name)
if (line<6){return ("Welcome, " + name + ". You are number " + line + " in line.")
}
}
takeANumber()

function nowServing(arr){
if(arr.length !== 0){
  var first=arr[0]
  arr.shift(arr[0])
return 'Currently serving ' + first + '.'

}else{
  return "There is nobody waiting to be served!"
}
}

nowServing()


function currentLine(array){
  var newArr=[]
  for(var i=0; i<array.length; i++){
    var str=i+1
    newArr.push(str + '. ' + array[i])
  }
  if (newArr.length !== 0){
    return 'The line is currently: ' + newArr.join(', ')
    }
    else{
      return 'The line is currently empty.'
    }
  }
  currentLine()
