console.log("Execution started... ");

setTimeout(function(){
    console.log("this message printed after 3 seconds.");
},3000);

console.log("Execution ended...");

function printi(val){
    setTimeout(function(){
        console.log(val, new Date());
    },3000);
};

function main(){
    var a = 10;
    for(i=0;i<a;i++){
        printi(i);
    }
};

main();

var seconds = 0;

setInterval(function(){
    if(seconds===59){
        seconds=0;
    }
    console.log(seconds,new Date());
    seconds++
}, 1000);