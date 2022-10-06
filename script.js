const liczba1 = document.querySelector('#liczba1');
const liczba2 = document.querySelector('#liczba2');
const liczba3 = document.querySelector('#liczba3');
const liczba4 = document.querySelector('#liczba4');

const btnPrzelicz = document.querySelector('#przelicz')

const wyniki1 = document.querySelector('#wyniki1')
const wyniki2 = document.querySelector('#wyniki2')
const wyniki3 = document.querySelector('#wyniki3')
const wyniki4 = document.querySelector('#wyniki4')

btnPrzelicz.addEventListener('click', () => {
    wyniki1.innerHTML = parseInt(liczba1.value) + parseInt(liczba2.value) + parseInt(liczba3.value) + parseInt(liczba4.value)
})

btnPrzelicz.addEventListener('click', () => {
    wyniki2.innerHTML = (parseInt(liczba1.value) + parseInt(liczba2.value) + parseInt(liczba3.value) + parseInt(liczba4.value)) / 4;
})

btnPrzelicz.addEventListener('click', () => {
    wyniki3.innerHTML = Math.min(parseInt(liczba1.value),parseInt(liczba2.value), parseInt(liczba3.value), parseInt(liczba4.value))
})

btnPrzelicz.addEventListener('click', () => {
    wyniki4.innerHTML = Math.max(parseInt(liczba1.value),parseInt(liczba2.value), parseInt(liczba3.value), parseInt(liczba4.value))
})