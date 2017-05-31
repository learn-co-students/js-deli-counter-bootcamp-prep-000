let  katzDeli = []
let katzDeliLine = []

function takeANumber (arr, name){
  arr.push(name)
  return `Welcome, ${name}. You are number ${arr.length} in line.`
}

function nowServing(arr){
  if(arr.length===0){return 'There is nobody waiting to be served!'}
  else {
    let temp = arr[0]
    arr.shift()
    return `Currently serving ${temp}.`
  }
}

function currentLine(arr){
  if (arr.length===0){return 'The line is currently empty.'}
  else {
    let temp = "The line is currently:"
    for(let i = 0; i < arr.length; i++ ){
      if (i===arr.length-1) {
        temp+=` ${i+1}. ${arr[i]}`
      }else {
        temp+=` ${i+1}. ${arr[i]},`
      }
    }
    //temp+=arr.join(`, `)
    return temp
  }
}
