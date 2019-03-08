// function takeANumber(x,y){
//   x.push(y);
//   var i= 0;
//   var k=0;
//   for(i=0;i<x.length;i++){
//     if(x[i]===y){
//       k=i+1;
//     }
//   } return 'Welcome, '+y+'. You are number '+k+ ' in line.'
// }

function takeANumber(array,name){
    array.push(name);
    return 'Welcome, '+name+'. You are number '+array.length+' in line.'
}

// function nowServing(person){
//   if(person.length===0){
//   return 'There is nobody waiting to be served!'
//   }else{
//     return 'Currently serving '+person.shift()+'.'
//   }
// }

function nowServing(array){
    if(array.length===0){
        return "There is nobody waiting to be served!"
    } else{
        return 'Currently serving '+array.shift()+'.'
    }
}

function currentLine(line){
  var pp=[];
  var sent='The line is currently: '
  if(line.length===0){
    return 'The line is currently empty.'
  } else{
    for(var i=0;i<line.length-1;i++){
      sent+=i+1+'.'+' '+line[i]+', '
    }
    sent+=[line.length]+'.'+' '+line[i]
    return sent;
  }
return sent;
}

