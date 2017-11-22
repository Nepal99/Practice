/**
 *  closures: Ability to retain the state of a function even after it's execution.
 *  It is useful in creating dynamic programming.
 *  if you return an object or anonymous function, whatever the variables we declare will not be removed from the memory.
 *  dynamic programming: 
 *  To erase the values in the closures we have to nullify the objects.
 * 
 * 
 **/

function addition(a,b){
    var sum = a+b;
    
    return sum;
};

function counterCreator(incrementBy){
    var count = 0;
    return function(){
        count += incrementBy;
        return count;

    }
};

var incrementBy1 = counterCreator(1);

console.log(incrementBy1());
console.log(incrementBy1());
console.log(incrementBy1());
console.log(incrementBy1());

var incrementBy25 = counterCreator(25);

console.log(incrementBy25());
console.log(incrementBy25());
console.log(incrementBy25());
console.log(incrementBy25());

/**
 *  to avoid the memory leaks we have to nullify the objects.
 *  incrementBy25 = null;
 * 
 *  
 */

/**
 * Need to be careful with the closures. 
 * If not used properly we will end with memory leaks.
 */

 