

// Katz Deli

function takeANumber(currentLine, newCustomerName) {
    currentLine.push(newCustomerName);
    console.log(currentLine);    
    return `Welcome, ${newCustomerName}. You are number ${(currentLine.length)} in line.` 
}



function nowServing(katzDeliLine) {
    if(katzDeliLine.length > 0) {
        return `Currently serving ${katzDeliLine.shift()}.`;
    }    
    else { 
        return "There is nobody waiting to be served!"
    }
}

function currentLine(customersInLine) {
    if (customersInLine == 0) {
        return "The line is currently empty."
    }
    else {
        let lineAnnouncer = customersInLine;
        var s = `The line is currently: `;
        for(let i = 0; i < lineAnnouncer.length; i++) {
            s = s + `${(i + 1)}. ` + lineAnnouncer[i];
            if (i < (lineAnnouncer.length - 1)) {
                s += ', ';
            } // This feels like hacky crap - there's gotta be a cleaner way. 
              // 80/20 rule. 
        }
        return s;
    }

}
