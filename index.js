var katzDeli = [];

function takeANumber(katzDeliLine, newName){
  katzDeliLine.push(newName);//this adds to end of array
  //for (let i = 0; i<katzDeliLine.length; i++){

        return "Welcome, " +newName+ ". You are number " + katzDeliLine.length + " in line.";
    //  }
  //  }
}

//use shift here
function nowServing(katzDeliLine){
if(katzDeliLine.length>0){
  return "Currently serving " + katzDeliLine.shift() + '.';
}else{
  return "There is nobody waiting to be served!";
}
}


function currentLine(katzDeliLine){
  var lineCallOut =[];
  for(let i=0; i<katzDeliLine.length; i++){
    lineCallOut.push(' ' + (i+1)+'. '+katzDeliLine[i]);
  }
    if (katzDeliLine.length>1){
    return "The line is currently:"+lineCallOut;
  }else {
  return "The line is currently empty.";
}
}



```katzDeli = []



// katzDeliLineObject = {Luis: 1, Ivan: 2, Sho: 3, Steven: 4, Lauren: 5, Ethan: 6, Yakov: 7}

// katzDeliLineObject = {1: "Luis", 2: "Ivan", 3: "Sho", 4: "Steven", 5: "Lauren", 6: "Ethan", 7: "Yakov"}

katzDeliLine = [{Luis: 1}, {Ivan: 2}, {Sho: 3}, {Steven: 4}, {Lauren: 5}, {Ethan: 6}, {Yakov: 7}]

n = katzDeliLine.length

function nowServing(katzDeliLine) {
 return Object.values(katzDeliLine.shift())[0]
}

function takeANumber(katzDeliLine, name) {
n++
return katzDeliLine.push({name: n})
}

function currentLine(katzDeliLine){
 let line = "The line is currently: "
 for (let i=0; i<katzDeliLine.length; i++){
   line += `${Object.values(katzDeliLine[i])[0]}: ${Object.keys(katzDeliLine[i])[0]}, `
 }
  return line.slice(0, length-2)
}


[4:25] 
```katzDeli = []

katzDeliLine = ["Luis", "Ivan", "Sho", "Steven", "Lauren", "Ethan", "Yakov"]


// function nowServing(katzDeliLine) {
//   return katzDeliLine.shift()
// }

nowServing = katzDeliLine => {
 return katzDeliLine.shift()
}

// function takeANumber(katzDeliLine, name) {
//   katzDeliLine.push(name)
//   return katzDeliLine.length
// }

takeANumber = (katzDeliLine, name) => {
 katzDeliLine.push(name)
 return katzDeliLine.length
}

currentLine = (katzDeliLine) => {
 let line = "The line is currently: "
 for (let i=0; i<katzDeliLine.length; i++){
   line += `${i+1}: ${katzDeliLine[i]}, `
 }

   return line.slice(0, length-2)
}
