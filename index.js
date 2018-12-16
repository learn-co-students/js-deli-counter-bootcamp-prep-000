// function takeANumber(lineOfPeople, name){
//   lineOfPeople = [...lineOfPeople, name]
//   return `Welcome, ${name}. You are number ${lineOfPeople.length} in line.`
// }

function takeANumber(lineOfPeople, name){
  lineOfPeople.push(name)
  return `Welcome, ${name}. You are number ${lineOfPeople.length} in line.`
}