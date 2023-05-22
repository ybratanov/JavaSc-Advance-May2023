function largestNumber(num1,num2,num3) {
    let result;
    let arr1 = num1;
    let arr2 = num2;
    let arr3 = num3;

    if ( arr1> arr2 && arr1 > arr3) {
        result = arr1;
    }else if( arr1 < arr2 && arr2 > arr3){
        result = arr2;
    }else if( arr3 > arr2 && arr1 < arr3){
        result = arr3;
    }
    console.log(`The largest number is ${result}.`);
}
largestNumber(5, -3, 16);