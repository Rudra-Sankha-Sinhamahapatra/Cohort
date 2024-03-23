var arr=[1,2,3,2,67,4,7,40,39];
var max=arr[0];

for(let i=0;i<arr.length;i++){
    if(arr[i]>max){
        max=arr[i];
    }
}

console.log(`Maximum element in the array is ${max}`);

/*
function maxValue(arr: number[]) {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return max;
}

console.log(maxValue([1, 2, 3]));
*/