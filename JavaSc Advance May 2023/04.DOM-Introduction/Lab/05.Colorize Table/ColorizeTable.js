function colorizeRows() {
    let evenElements = document.querySelectorAll('table tr')
    let index = 0;
   for(let even of evenElements) {
    index++
    if(index % 2 === 0) {
        even.style.background = "teal"
    }
   }
 }