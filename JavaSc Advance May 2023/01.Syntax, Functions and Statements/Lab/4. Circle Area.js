function circleArea(params) {
    let result;
    let typeOfPar = typeof(params);

    if (typeOfPar === 'number'){
        result = Math.pow(params , 2) * Math.PI;
        console.log(result.toFixed(2));
    }else{
        console.log("We can not calculate the circle area, because we receive a string.");
    }
}
circleArea(5);
circleArea('name');