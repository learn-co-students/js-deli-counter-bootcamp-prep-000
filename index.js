var katsDeliLine = [];

function takeANumber(arr, nm){
  arr.push(nm)
  return `Welcome, ${nm}. You are number ${arr.length} in line.`
}

function nowServing(arr){
  if (arr.length > 0) {
    for (var i = 0; i < arr.length-1; i++) {
      var nm = arr.slice(0,1)
      arr.shift()
      return `Currently serving ${nm}.`
    }
    }else {
      return `There is nobody waiting to be served!`
  }
}

function currentLine(arr){
  var list = ""
  if (arr.length > 0){
    for (var i=0; i < arr.length; i++){
      if (i < arr.length -1) {
        var list = list + (i+1) + ". " + arr[i] +", "
      } else {
        list = list + (i+1) + ". " + arr[i]
      }
    }
    return `The line is currently: ${list}`
  }else {
    return `The line is currently empty.`
  }
}
