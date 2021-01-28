class Stack 
{
    constructor() {
        this.items = []
    }

    push(item) {
        this.items.push(item);
        return item;
    }

    pop() {
        this.items.pop();
    }

    peek() {
        return this.items.pop();
    }

    is_empty() {
        return this.items.length == 0;
    }

    size() {
        return this.items.length;
    }
}

module.exports = Stack;