var katzDeliLine = [];
function takeANumber(current_line_of_people, new_person_name){
 current_line_of_people.push(new_person_name);
 return `Welcome, ${new_person_name}. You are number ${current_line_of_people.indexOf(new_person_name)+1} in line.`;
}

const deliLine = ["Steven", "Blake", "Avi"];
function nowServing(deliLine){
  if(deliLine.length>0){
  var a = deliLine.shift()
  return "Currently serving " + a +"."
  
  }
  else{
  return "There is nobody waiting to be served!"}
}

function currentLine (katzDeliLine){
  if(katzDeliLine.length == 0){
    return "The line is currently empty."
  }
   var myString = `The line is currently: 1. ${katzDeliLine[0]}`
   for(let i = 1; i<katzDeliLine.length;i++){
  myString += `, ${i+1}. ${katzDeliLine[i]}`
}
return myString
}