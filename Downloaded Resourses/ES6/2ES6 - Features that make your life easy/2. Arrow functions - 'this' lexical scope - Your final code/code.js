//ES5
document.getElementById('button1').addEventListener('click', function(){
    console.log('ES5');
});

//ES6
document.getElementById('button2').addEventListener('click', () => {
    console.log('ES6');
});


var list = [1, 3];
//ES5
var list1 = list.map(function(x){
    return x * 2;
});
console.log(list1);

//ES6
const list2 = list.map(x => {
    return x * 2;
});
console.log(list2);

const list3 = list.map(x => x * 2);
console.log(list3);

//this
//ES5
document.getElementById('button3').addEventListener('click', function(){
    console.log(this.innerHTML);
});

//ES6
document.getElementById('button4').addEventListener('click', () => {
    console.log(this.innerHTML);
});

//Another example:
//ES5
var player5 = {
    name: 'John',
    click: function(){
        var player = this;
        document.getElementById('button5').addEventListener('click', function(){
            console.log(player.name);
        });
    }
};
player5.click();

//ES6
var player6 = {
    name: 'John',
    click: function(){
        document.getElementById('button6').addEventListener('click', () => {
            console.log(this.name);
        });
    }
};
player6.click();



