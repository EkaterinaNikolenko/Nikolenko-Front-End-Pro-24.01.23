let numbers = prompt("Enter numbers");
let arr = [];
arr = numbers.split(', ');

let sum = 0;
arr.forEach(
    (element) =>
    sum += Number(element)
);

let max = 0;
let min = 0;

if(arr[0] >= arr[1] && arr[0] >= arr[2]){
    max = arr[0];
}
else if(arr[1] >= arr[0] && arr[1] >= arr[2]){
    max = arr[1];
}
else{
    max = arr[2];
}

if(arr[0] <= arr[1] && arr[0] <= arr[2]){
    min = arr[0];
}
else if(arr[1] <= arr[0] && arr[1] <= arr[2]){
    min = arr[1];
}
else{
    min = arr[2];
}

alert(`first number is ${arr[0]}, last number is ${arr.at(-1)}
${arr.join(' + ')} = ${sum}
min is ${min}, max is ${max}`);

let userNum = prompt("Please enter one of the numbers which you entered before?");

switch(userNum){
    case arr[0]:
        alert("It was the first number");
        break;
    case arr[1]:
        alert("It was the second number");
        break;
    case arr[2]:
        alert("It was the third number");
        break;
    default:
        alert("Sorry, you did not enter this number!");
        break;
}