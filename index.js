function takeANumber(deli, cust){
    deli.push(cust);
    return `Welcome, ${cust}. You are number ${deli.length} in line.`;
}

function nowServing(line){
    if (0 === line.length){
        return 'There is nobody waiting to be served!';
    }
    else {
        return `Currently serving ${line.shift()}.`;
    }
}

function currentLine(line){
    if (0 === line.length){
        return "The line is currently empty."
    }
    else {
        let numberedLine = line;
        for (let i = 0, spot = 1; i < line.length; i++, spot++){
            numberedLine[i] = `${spot}. ` + line[i];
        }

        return (
            "The line is currently: " + 
            numberedLine.join(', ')
        );
    }
}