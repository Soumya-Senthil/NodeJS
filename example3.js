const arr = ['apple', 'oranges' , ' ', 'mango', ' ' , 'lemon'];
console.log(arr.map(fruit=>{
    if(fruit==' '){
       return fruit='empty string' ;
    }

    else
    return fruit;
}));

//console.log(arr);