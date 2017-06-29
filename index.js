var katzDeli=[];

function  takeANumber(katzDeliLine,person){
  katzDeliLine.push(person)
//var index= katzDeliLine.length +1;
  return `Welcome, ${person}. You are number ${katzDeliLine.length} in line.`
}

function  nowServing(array){
  if(array.length===0){
    return "There is nobody waiting to be served!"
  }
  else return `Currently serving ${array.shift()}.`

}

function  currentLine(array){
  if (array.length===0){
    var response= "The line is currently empty."
  } else{
var queue=[];

  for (var i=0; i<array.length; i++){
    queue.push(`${i+1}. ${array[i]}`)
  }
var response= `The line is currently: ${queue.join(', ')}` }

return response

}
