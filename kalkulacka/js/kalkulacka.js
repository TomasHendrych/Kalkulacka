const vypocet = document.getElementById('vypocet');

vypocet.addEventListener('click', function(){
    let x = parseInt(document.getElementById('x').value);
    let y = parseInt(document.getElementById('y').value);
    let operator = document.querySelector('input[name="operator"]:checked').value;    
    const vysledek = document.getElementById('vysledek');
    if (operator == '+') vysledek.innerText = x + y;
    if (operator == '-') vysledek.innerText = x - y;
    if (operator == '*') vysledek.innerText = x * y;
    if (operator == '/') vysledek.innerText = y != 0 ? x / y : 'Nelze dělit nulou!';
    console.log(eval(x + operator + y));
});