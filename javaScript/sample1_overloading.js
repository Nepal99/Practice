function add(){     // variadic functions. here we are not limitting the number of arguments.
    //console.log(arguments);   //  To access the arguments passed to the function we use the arguments keyword.
    var sum = 0;
    for(i=0;i<arguments.length;i++){
        sum+= arguments[i];
    }
    return sum;
};

console.log(add(10,22,13,45));

// here it is the overloading, same function taking different number of inputs.

/*
 using the apply() method.
both apply and call takes the two arguments, 
first one is the object where we want to inherit the properties from. second one is the values we are passing to the object.
call will accept the values as the arguments.
apply will accept the arrays as the arguments. 


*/

 var values = [1,2,3,4,6,7,4,6,73];

 console.log(add.apply(null,values));
 console.log(add.call(null,1,2,3,4,5,6));