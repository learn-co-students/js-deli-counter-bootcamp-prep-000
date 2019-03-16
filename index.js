function takeANumber(arr, name){
  	let num = arr.length + 1
    num = num.toString()
    arr.push(name)
    return (`Welcome, ${name}. You are number ${num} in line.`)
  	
    
}
// "The line is currently: 1. Ada, 2. Grace, 3. Kent"

function currentLine(arr){
  if (!arr.length){
    return('The line is currently empty.')
  }
  let longString = []
  for (let i = 0; i < arr.length; i++){
	longString.push(String(i+1) + ". " + arr[i])
  
  }
  let veryLongString = longString.join(", ")
  return(`The line is currently: ${veryLongString}`)
}

function nowServing(arr){
  if (arr.length > 0){
    let customer = arr.shift()
    return("Currently serving " + customer + ".")
  }else{
    return('There is nobody waiting to be served!')
  }
}

takeANumber(katzDeliLine, "Ada"); // "Welcome, Ada. You are number 1 in line."
takeANumber(katzDeliLine, "Grace"); // "Welcome, Grace. You are number 2 in line."
takeANumber(katzDeliLine, "Kent"); // "Welcome, Kent. You are number 3 in line."
currentLine(katzDeliLine); // "The line is currently: 1. Ada, 2. Grace, 3. Kent"
nowServing(katzDeliLine); // "Currently serving Ada."
currentLine(katzDeliLine); // "The line is currently: 1. Grace, 2. Kent"
takeANumber(katzDeliLine, "Matz"); // "Welcome, Matz. You are number 1 in line."
currentLine(katzDeliLine); // "The line is currently: 1. Grace, 2. Kent, 3. Matz"
nowServing(katzDeliLine); // "Currently serving Grace."
currentLine(katzDeliLine); // "The line is currently: 1. Kent, 2. Matz"
