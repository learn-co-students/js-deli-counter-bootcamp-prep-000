function takeANumber(katzDeliLine,Ada){
katzDeliLine.push(Ada)
  return`Welcome, ${Ada}. You are number ${katzDeliLine.length} in line.` }
function nowServing(katzDeliLine){
   for (let i =0; i >1; i++){
     if(i===0){
       katzDeliLine.push('There is nobody waiting to be served!')}
     else{
       katzDeliLine.push(`currently serving ${katzDeliLine.length}`) } }
  return katzDeliLine
}