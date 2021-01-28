const Stack = require("./Stack");

function perChecker(symbols) {
    let stack = new Stack();
    let balance = true;
    let index = 0;
    while ( index < symbols.length ) {
        let symbol = symbols[index];
        if ( symbol === "(" ) {
            stack.push(symbol);
        } else {
            if ( stack.is_empty() ) {
                balance = false;
            }
            else {
                stack.pop();
            }
        }
        index++;
    }

    if (balance && stack.is_empty()) {
        return true;
    } else {
        return false;
    }
}

console.log(perChecker("((())))"));