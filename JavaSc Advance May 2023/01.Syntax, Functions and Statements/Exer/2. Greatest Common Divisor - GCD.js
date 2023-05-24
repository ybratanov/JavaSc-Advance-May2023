function greatestCommonDivisor(firstNum, secNum) {
    while (secNum) {
        let temp = secNum;
        secNum = firstNum % secNum;
        firstNum = temp;
    }

    console.log(firstNum);
}
greatestCommonDivisor(15, 5);
greatestCommonDivisor(2154, 458);