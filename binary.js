function changeBinary(decNumber) {
    let remStack = [];
    while ( decNumber > 0 ) {
        remStack.push(decNumber % 2);
        decNumber = parseInt(decNumber / 2);
    }
    let binary = "";
    while (remStack.length) {
        binary = binary + remStack.pop().toLocaleString();
    }
    return binary;
}

console.log(changeBinary(135))