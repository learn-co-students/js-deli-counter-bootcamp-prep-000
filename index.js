//Initial Variables
let katzDeli = [];
let otherDeli = ["Steven", "Blake", "Avi"]
//let x = otherDeli || katzDeli
if(x === otherDeli)
{ var x = otherDeli

} else
{
  var x = katzDeli
}
  
// x = currentLine of people (katzDeli)
     function takeANumber(x, y)

{  if(x === otherDeli)
{ var x = otherDeli

} else if (x === katzDeli)
{
  var x = katzDeli
} 
else 
{
  console.log('nothing picked')
}

      var y = y
        var i = 0;
        var z = ''
        
        // Element measure
        for( i = 0; i <= x.length ; i++)
        {
        // Position Declaration 
        if ( y !== undefined)
        { var z = x.length + 1 
        console.log(x.length)
        console.log(z)
        break;
        }
        else
        {
        break;
        }
        }
        x.push(y)
// Following Tests on function 
//console.log(`Welcome ${y}, You are number ${z} in line.`)
return `Welcome, ${y}. You are number ${z} in line.`

// System Tests
 // Pulling items Test
 console.log(x[0])
//New Push Addition Test 
 console.log(y)
 // New Length Test 
 console.log(katzDeli.length)
 //Current Array Test
 console.log(katzDeli)
 // 2nd Pullig Item Test
 console.log(katzDeli[2])

       }
 
            // if (counter === 1 )
            //   {
            //     console.log(katzDeli[1])
            //   }
 
          // //console.log(`Welcome,${y}. You are number${number} in line.`)
    
    // takeANumber(x,'name')
//---Add this if it fails-->  takeANumber(katzDeli, 'Tom')

function nowServing(x) 
          {
{ 
  if(x === otherDeli)
              { 
                 x = otherDeli

               } else if (x === katzDeli)
                {
                     x = katzDeli
                 } 
                    else 
                  {
                      console.log('nothing picked')
                    }
              var current = x[0]
                  //console.log(`Now serving ${current} `)
                  if(x[0] !== undefined)
                      {
                           
                    } else if (x.length < 1)
                     {
                       return `There is nobody waiting to be served!`
                     }
                 
                  

console.log( `Now Serving ${x[0]}`)
                  return `Currently serving ${x.shift()}.`
        }
    }
    
    
// function currentLine(line) 
//         {
//           {  if(line === otherDeli)
//               {  line = otherDeli

//               } else if (line === katzDeli)
//                 {
//                     line = katzDeli
//                 } 
//                     else 
//                   {
//                       console.log('nothing picked')
//                     }
//                     var array = ['The line is currently: '];
//                   // var counter = 1
//                     for( var counter = 0; counter < line.length; ++counter)
//                     if(line.length < 1)
//                     {
//                     return `The line is currently empty`
//                     }
//                     else
//                     {
//                 //  j = `The line is currently: ${counter +1} ${ line[counter++]}. `
//                 // s = j.join()
//                 // status = "The line is currently: "
//                   //array.push(status)
//                   array.push( " " + (counter + 1) + ". " + line[counter])
                  
//                   //console.log(j)
                  
//                   // array.push
//                     array.join(',')
                 
//                   //console.log(array)
//                     }
//           }
//           return(array.join(','))
//         }

function currentLine(line){
  if(line.length===0){
    return("The line is currently empty.")
  }
  else{
    var lineOut = "The line is currently: ";
    for (var i=0; i < line.length; i++){
    lineOut+=String(i+1) + ". " +line[i]+", ";
    }
    return lineOut.slice(0,lineOut.length - 2);
  }
}

