function fruit(fruti,kilograms,price){

    let kilosToGrams = kilograms / 1000;
    let forKilos = kilosToGrams * price;

    console.log(`I need $${forKilos.toFixed(2)} to buy ${kilosToGrams.toFixed(2)} kilograms ${fruti}.`);



}
fruit('orange', 2500, 1.80);

//`I need ${money} to buy {weight} kilograms {fruit}.