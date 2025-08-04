//for(var i = 0; i < 3; i ++){
//    document.getElementById(i).addEventListener('click', function(){
//        console.log(i);
//    })
//}

//Solution in ES5: use a closure
//var f = function(x){
//    return function(){
//        console.log(x);
//    }
//}
//
//for(var i = 0; i < 3; i ++){
//    document.getElementById(i).addEventListener('click', f(i))
//}
//f(0), f(1), ...


//Now try with let:

for(let i = 0; i < 3; i ++){
    document.getElementById(i).addEventListener('click', function(){
        console.log(i);
    })
}