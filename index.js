function takeANumber (katzDeliLine, name){
  katzDeliLine.push(name)
  var numberInLine = katzDeliLine.indexOf(name)
  numberInLine = numberInLine + 1
  return `Welcome, ${name}. You are number ${numberInLine} in line.`
}

function nowServing(arr){
  if (arr.length === 0){
    return "There is nobody waiting to be served!"
  }else{
    var nwServing = arr[0];
    var currentlyServing = `Currently serving ${nwServing}.`
    arr.shift()
    return currentlyServing
  }
}

function currentLine (arr){
  var str = "The line is currently:"
  if (arr.length === 0){
    return "The line is currently empty."
  } else {
    for (var i = 0; i < arr.length; i++){
      str += ` ${i+1}. ${arr[i]}${i==arr.length-1 ? '' : ','}`
    }
    return str
  }
}