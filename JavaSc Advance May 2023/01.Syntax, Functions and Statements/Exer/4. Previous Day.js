function previousDay(year , month , day) {
    const date = new Date(year , month - 1 , day);
    date.setDate(date.getDate() - 1);

    let yy = date.getFullYear();
    let mm = date.getMonth() + 1;
    let dd = date.getDate();
    let output = `${yy}-${mm}-${dd}`

    console.log(output);
}
previousDay(2016, 9, 30);
//2016-9-29