//create a separate scope first using a block
//{
//    greet();//hi
//    function greet(){
//        console.log('hi');
//    }
//    greet();//hi
//    
//    {
//        function greet(){
//            console.log('hello');
//        }
//        greet();//hello
//        
//    }
//    greet();//hi
//    
//}


//greet();//hi
let greet = function(){
    console.log('hi');
}
greet();//hi

{
    let greet = function(){
        console.log('hello');
    }
    greet();//hello
    
    {
        let greet = function(){
            console.log('hi there');
        }
    }

}
greet();//hi

{
    let greet = function(){
        console.log('hi hello');
    }
}
greet();//hi

    
