function takeANumber (katzDeliLine, name){
 katzDeliLine.push(name) 
  var k = katzDeliLine.length
  return (`Welcome, ${name}. You are number ${k} in line.`)
}

function nowServing (katzDeliLine) {
  if (katzDeliLine.length > 1){ 
  var name =  katzDeliLine.shift()
   
   return `Currently serving ${name}.`
  }
  else {
  return  "There is nobody waiting to be served!"}

}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0 ){
  return  "The line is currently empty."  
} else  {
  var newline = []
 katzDeliLine.forEach(function(customer,index){
  var person = ` ${index+1}. ${customer}`
 newline.push(person)  
});
}
return 'The line is currently:' + newline
}
