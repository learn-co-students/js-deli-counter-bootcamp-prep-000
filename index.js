function takeANumber(arr,name){
  arr.push(name)
  return `Welcome, ${name}. You are number ${arr.length} in line.`
}

function currentLine(katzDeliLine){
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  }else{

    var res = 'The line is currently: '
    for (var i = 1; i <= katzDeliLine.length; i++) {
      i === katzDeliLine.length ? res += `${i}. ${katzDeliLine[i-1]}` : res += `${i}. ${katzDeliLine[i-1]}, `
    }
    return res
  }
}

function nowServing(arr){
  if (arr.length > 0) {
    return `Currently serving ${arr.shift()}.`
  }else{
    return "There is nobody waiting to be served!"
  }
}
