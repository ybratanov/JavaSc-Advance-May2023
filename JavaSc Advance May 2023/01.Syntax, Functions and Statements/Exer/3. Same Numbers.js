function sameNumbers(imput) {

    let arry = imput.toString().split("");
    let sum = 0;
    let isSame = true;

    for (let i = 0; i < arry.length; i++ ){
        const currentNum = arry[i];
        sum += Number(currentNum);

        if(arry[0] !== currentNum){
            isSame = false;

        }
    }
    console.log(isSame);
    console.log(sum);
}
sameNumbers(2222222);
// true 14
sameNumbers(1234);
// false 10