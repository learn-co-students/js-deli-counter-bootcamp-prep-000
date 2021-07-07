function takeANumber(katzDeliLine, name) {
katzDeliLine.push(name);
return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}
function nowServing(katzDeliLine){
  if( katzDeliLine.length == 0){
    return "There is nobody waiting to be served!"
  }
  else{
      return `Currently serving ${katzDeliLine.shift()}.`

  }
    }

  function currentLine(katzDeliLine){
    if( katzDeliLine.length == 0){
      return "The line is currently empty."
    }
    else{
      var arr =[];
      for(let i = 0 ; i<katzDeliLine.length; i++ ){
        if (i==0){
        arr.push(`${i+1}` + '. ' +  `${katzDeliLine[i]}`)}
        else{
          arr.push(` ${i+1}` + '. ' +  `${katzDeliLine[i]}`)
        }
            }
      return "The line is currently: " +  arr
    }

  }


//newline.push(`${i + 1}` + '.' + `${line[i]}`)
// first way...
		// line.forEach(function(customer, index) {
		//   var position = index + 1;
		//   newLine.push(" "+ position + ". " + customer);
		// });

		// using Arrow function...
		//line.forEach((customer, index) => {
			//var position = index + 1;
			//newLine.push(" " + position + ". " + customer);
		//});

		// using for loop...
		// for (let i = 0; i < line.length; i++) {
		// 	newline.push(`${i + 1}` + '.' + `${line[i]}`)
		// }
