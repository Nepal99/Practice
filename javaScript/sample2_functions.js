//Demonstrating functions
function multiplication(n)
{
    for(i=1;i<=10;i++)
        {
            console.log(n + "X" +i+"="+n*i);
        }
}

//different ways of caling a function.
multiplication(198);
multiplication.call(null,81);
multiplication.apply(null,[17]);