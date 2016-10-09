var katzDeli = []
function takeANumber(arr , name){
  arr.push(name)
  return `Welcome, ${name}. You are number ${arr.length} in line.`
}
function nowServing(arr){
  if (arr.length > 0){
  var  pk = arr[0]
    arr.shift()
  return `Currently serving ${pk}.`
  }
  else return "There is nobody waiting to be served!"
}

function currentLine(arr){
    var  i = ""
    if(arr.length > 0){
        arr.forEach(( name, index) => {

               i = i + (`${index + 1}. ${name}, `)
            })
        return `The line is currently: ${i}`
    }



    else return "The line is currently empty."
}
