function curriedAdd(total) {
    let sum = total || 0;
    if (!total) return sum;
    return function adder(num) {  
        if (!num) return sum;
        else {
            sum += num;
            return adder;
        }        
    }
}

module.exports = { curriedAdd };

/**
 * Problem: write a function that:
 *      -returns a new function if you give it a number
 *      -return the total of all the numbers you've passed to it if you give it no arguments
 * 
 * let sum = total || 0;
 * if the argument is a number, return function adder, which adds to the sum;
 * if there is no argument, return the sum;
 */