function stringLength(arr1,arr2,arr3) {
    let sumLength;
    let avengerLength;

    let firstArr = arr1.length;
    let secArr = arr2.length;
    let therdArr = arr3.length;

    sumLength = firstArr + secArr + therdArr;
    avengerLength = Math.floor(sumLength / 3);

    console.log(sumLength);
    console.log(avengerLength);    
}
stringLength('chocolate', 'ice cream', 'cake');