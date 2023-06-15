function sumTable() {
    let total = 0;
    let prices = document.querySelectorAll('table tr td:nth-child(2)')
    for(let price of prices) {
        total += Number(price.textContent)
    }
document.getElementById('sum').textContent = total
}