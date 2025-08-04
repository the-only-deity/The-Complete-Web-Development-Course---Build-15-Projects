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


greet();//hi
function greet(){
    console.log('hi');
}
greet();//hi

{
    function greet(){
        console.log('hello');
    }
    greet();//hello
    
    {
        function greet(){
            console.log('hi there');
        }
    }

}
greet();//hello

{
    function greet(){
        console.log('hi hello');
    }
}
greet();

    
