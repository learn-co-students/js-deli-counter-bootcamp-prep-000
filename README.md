var katzDeliLine = [];

function takeANumber(arr, name){
  	let num = arr.length + 1
    num = num.toString()
    return(`Welcome, ${name}. You are number ${num} in line.`)
  	katzDeliLine.push(name)
  
}
// "The line is currently: 1. Ada, 2. Grace, 3. Kent"

function currentLine(arr){
  longString = []
  for (i = 0; i < arr.length; i++)
	longString.push(" " + String(i+1) + ". " + arr[i])
  veryLongString = longString.join()
  return(`The Line is currently:${veryLongString}`)
  
}


function nowServing(arr){
  if (arr.length > 0){
    customer = arr.shift()
    return("Currently Serving " + customer)
  }else{
    return('The line is currently empty')
  }
}


