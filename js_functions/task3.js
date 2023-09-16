function factorial(num){
    console.log(num);
    if (num <= 0){
        return;
    } 
    factorial(num - 1);
}

factorial(5);